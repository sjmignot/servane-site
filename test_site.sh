parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

open http://127.0.0.1:5001/ && uv run ./app.py 
