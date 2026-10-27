import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"=====================================================")
        print(f" 🎮 RPG Quest Todo (갓생 모험가 투두) 웹 서버 시작됨!")
        print(f" 🌐 접속 주소: http://localhost:{PORT}")
        print(f" 종료하려면 Ctrl+C를 누르세요.")
        print(f"=====================================================")
        webbrowser.open(f"http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n서버가 안전하게 종료되었습니다.")

if __name__ == "__main__":
    run()
