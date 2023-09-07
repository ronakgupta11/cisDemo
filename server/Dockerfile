FROM python:3.8
ADD requirements.txt /
RUN pip install -r /requirements.tx
ADD cis_ieee.py /
ENV PYTHONUNBUFFERED=1
CMD [ "python", "cis_ieee/.py" ]