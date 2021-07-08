from django.conf import settings
from django.core.files.storage import FileSystemStorage
from storages.backends.s3boto3 import S3Boto3Storage


def select_storage(public=False):
    storage = LocalMediaStorage()
    if settings.USE_S3:
        storage = RemotePublicMediaStorage() if public else RemotePrivateMediaStorage
    return storage


class LocalMediaStorage(FileSystemStorage):
    location = 'media'
    file_overwrite = False


class RemotePublicMediaStorage(S3Boto3Storage):
    location = 'media/public'
    file_overwrite = False


class RemotePrivateMediaStorage(S3Boto3Storage):
    location = 'media/private'
    default_acl = 'private'
    file_overwrite = False
    custom_domain = False
