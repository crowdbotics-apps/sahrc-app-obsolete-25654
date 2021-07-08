import uuid

from django.utils.encoding import smart_bytes
from django.utils.http import urlsafe_base64_encode


def user_directory_path(instance, filename):
    extension = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), extension)
    uidb64 = urlsafe_base64_encode(smart_bytes(instance.id))
    return f'user_{uidb64}/{filename}'
