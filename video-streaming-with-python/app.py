from flask import Flask, render_template, Response, request
import urllib 
from urllib.request import urlopen
import json


app = Flask(__name__)

# def gen_v2(stream_url):
#     '''
#     This util uses openCv to read the video stream, 
#     encode the image frame by frame and then yeild the byte 
#     string to the caller.
#     '''
#     import cv2  //make sure to import cv2 when trying with gen_v2
#     cap = cv2.VideoCapture(stream_url)
#     while True:
#         ret,frame = cap.read()
#         (flag, encodedImage) = cv2.imencode(".jpg", frame)
#         yield (b'--frame\r\nContent-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n')

def gen(stream_url):
    '''
    This function uses urllib to read the video stream, 
    then slice the byte string for certain length to obtain 
    each frame and then yeild the byte string to the caller.
    '''
    stream = urlopen(stream_url)
    _bytes = b''
    while True:
        resp = stream.read(1024)
        _bytes += resp
        # check the existance of start and end chunks
        start = _bytes.find(b'\xff\xd8')
        end = _bytes.find(b'\xff\xd9')
        if start != -1 and end != -1:
            frame = _bytes[ start : end+2 ]
            _bytes = _bytes[ end+2 : ]
            yield (b'--frame\r\nContent-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/python/video')
def video_feed():
    url = request.args.get("stream_url")
    if url:
        try:
            _stream = urlopen(url)
            return Response(gen(url),
                            mimetype='multipart/x-mixed-replace; boundary=frame')
        except Exception as e:
            print(e)
            return Response(
            response=json.dumps({"status":False, "err":"stream_url is Invalid"}),
            mimetype='application/json'
            )
    else:
        return Response(
            response=json.dumps({"status":False, "err":"stream_url is not defined"}),
            mimetype='application/json'
            )

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)