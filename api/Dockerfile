FROM python:3
ADD restApi.py .
RUN apt-get update && apt-get install -y python3-pip
RUN pip3 install flask
RUN pip3 install requests
RUN pip3 install python-firebase
RUN pip3 install flask-cors
EXPOSE 6001
CMD python3 restApi.py