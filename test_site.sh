parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

open http://0.0.0.0:5000/ && python3 app.py 
