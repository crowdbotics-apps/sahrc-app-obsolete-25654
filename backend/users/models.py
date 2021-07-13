from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from common.storage_backends import select_storage
from common.utils import user_directory_path


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """
    GenderChoices = (
        ("Male", "Male"),
        ("Female", "Female"),
        ("Non-Conforming", "Non-Conforming"),
        ("Prefer not to Say", "Prefer not to Say")
    )
    # First Name and Last Name do not cover name patterns
    # around the globe.
    dob = models.DateField(_("Date of birth of User"), null=True, blank=True)
    picture = models.ImageField(storage=select_storage(), upload_to=user_directory_path, null=True, blank=True)
    gender = models.CharField(_("Gender of User"), max_length=50, choices=GenderChoices, null=True, blank=True)
    school_code = models.CharField(_("School code"), max_length=255, null=True, blank=True)
    zip_code = models.CharField(_("Zip code"), max_length=50, null=True, blank=True)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
