#!/usr/bin/env bash
set -euo pipefail

MODLIST="${1:-modlist.md}"
PACK_FILE="pack.toml"

if ! command -v packwiz >/dev/null 2>&1; then
    echo "error: packwiz not found on PATH" >&2
    exit 1
fi

if [[ ! -f "$MODLIST" ]]; then
    echo "error: $MODLIST not found" >&2
    exit 1
fi

added=0
failed=0

while IFS= read -r line; do
    url=$(printf '%s\n' "$line" | sed -nE 's/^[[:space:]]*-[[:space:]]*\[[^]]*\]\(([^)]*)\).*/\1/p')
    [[ -n "$url" ]] || continue

    name=$(printf '%s\n' "$line" | sed -nE 's/^[[:space:]]*-[[:space:]]*\[([^]]*)\].*/\1/p' | sed "s/&#39;/'/g; s/&amp;/\&/g")

    case "$url" in
        *modrinth.com*)
            id=$(printf '%s\n' "$url" | sed 's#.*/mod/##; s#/$##')
            cmd=(packwiz modrinth add "$id")
            ;;
        *curseforge.com*)
            id=$(printf '%s\n' "$url" | sed -E 's#.*/projects/([0-9]+).*#\1#')
            cmd=(packwiz curseforge add --addon-id "$id")
            ;;
        *)
            echo "skip: unrecognized URL: $url"
            continue
            ;;
    esac

    printf '==> %s (%s)\n' "$name" "$url"
    if "${cmd[@]}" --pack-file "$PACK_FILE" -y; then
        added=$((added + 1))
    else
        echo "!! FAILED: $name" >&2
        failed=$((failed + 1))
    fi
done < "$MODLIST"

echo
echo "Added $added mod(s); $failed failed."
[[ $failed -eq 0 ]]
