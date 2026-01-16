import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Serve index.html for root path
        if self.path == '/' or self.path == '':
            self.path = '/index.html'
            super().do_GET()
            return
        
        # Serve static files if they exist
        path = self.translate_path(self.path)
        if os.path.exists(path) and os.path.isfile(path):
            super().do_GET()
        else:
            # Fallback to dashboard.html for SPA routing (dashboard routes)
            # Check if likely an asset request first to avoid sending html for missing images
            if any(self.path.endswith(ext) for ext in ['.png', '.jpg', '.css', '.js', '.ico']):
                self.send_error(404, "File not found")
            elif self.path.startswith('/dashboard'):
                # Dashboard routes should serve dashboard.html
                self.path = '/dashboard.html'
                super().do_GET()
            else:
                self.path = '/index.html'
                super().do_GET()

os.chdir(DIRECTORY)

with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
    print(f"✅ QUIZSMITH Server running at http://localhost:{PORT}")
    print(f"👉 Press Ctrl+C to stop")
    print(f"🚀 Supporting routes like /courses/python")
    httpd.serve_forever()
