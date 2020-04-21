  
FROM python:3

LABEL maintainer="Dhilip"

ENV PORT=8000

WORKDIR /app

ADD requirements.txt requirements.txt 

RUN pip install -r requirements.txt

ADD . .

EXPOSE 8000

CMD ["python", "app.py"]