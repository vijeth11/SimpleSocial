FROM python:3.7-alpine
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN apk add --update --no-cache --virtual .tmp-build-deps \
      gcc libc-dev linux-headers libffi-dev musl-dev zlib zlib-dev
RUN pip install -r requirements.txt
RUN apk del .tmp-build-deps
COPY . /code/