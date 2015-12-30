"""
Django settings for churchave project.

Generated by 'django-admin startproject' using Django 1.8.6.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent
OSCAR_BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
from oscar import OSCAR_MAIN_TEMPLATE_DIR
from oscar import get_core_apps
from oscar.defaults import *



EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
DEFAULT_FROM_EMAIL='noreply@alltechstar.com'
EMAIL_HOST_USER = 'alltechstarsendmail@gmail.com'
EMAIL_HOST_PASSWORD = 'alltechalltech'


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
import environ
env = environ.Env()
# Ideally move env file should be outside the git repo
# i.e. BASE_DIR.parent.parent
env_file = BASE_DIR / 'local.env'
if env_file.is_file():
    environ.Env.read_env(str(env_file))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/dev/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
# Raises ImproperlyConfigured exception if SECRET_KEY not in os.environ
SECRET_KEY = env('SECRET_KEY')
# SECRET_KEY="p!$$tlczxr@47&*kg@zhd6fh6xkd__rosy=#k5w+=z8zrp3p&m"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django_admin_bootstrapped',
    'crispy_forms',
    #canhhs
    'django.contrib.sites', 
    'django.contrib.flatpages',
    'compressor',
    'widget_tweaks',
    'paypal',
    #end canhhs
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'base',
]+ get_core_apps()

SITE_ID = 1

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    #canhhs added
    'oscar.apps.basket.middleware.BasketMiddleware', 
    'django.contrib.flatpages.middleware.FlatpageFallbackMiddleware',
    #end canhhs
    
)


HAYSTACK_CONNECTIONS = {
    'default': {
        'ENGINE': 'haystack.backends.simple_backend.SimpleEngine',
    },
}


ROOT_URLCONF = 'churchave.urls'



TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(OSCAR_BASE_DIR, 'templates'),
            OSCAR_MAIN_TEMPLATE_DIR
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',

                'oscar.apps.search.context_processors.search_form',
                'oscar.apps.promotions.context_processors.promotions',
                'oscar.apps.checkout.context_processors.checkout',
                'oscar.apps.customer.notifications.context_processors.notifications',
                'oscar.core.context_processors.metadata',
            ],
        },
    },
]

WSGI_APPLICATION = 'churchave.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {
    # Raises ImproperlyConfigured exception if DATABASE_URL not in
    # os.environ
    'default': env.db(),
}



# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATIC_URL = '/static/'

STATIC_ROOT = 'static/'
MEDIA_ROOT = os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..', 'media'))
MEDIA_URL = '/media/'


PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))+'/..'
TEMPLATE_DIRS = (os.path.join(PROJECT_ROOT, "templates"),)


#canhhs
# PAYPAL_API_USERNAME = 'canhhs91-facilitator_api1.gmail.com'
# PAYPAL_API_PASSWORD = 'DPCFFE3J4QRESJNF'
# PAYPAL_API_SIGNATURE = 'AFcWxV21C7fd0v3bYYYRCpSSRl31Ag7zVA2tWWA96x4iGnEEEr7cNvvI'
PAYPAL_API_USERNAME = 'greenpointtrees_api1.gmail.com'
PAYPAL_API_PASSWORD = 'VDNU6UHWPNY9WTS3'
PAYPAL_API_SIGNATURE = 'AXEjJsnGKyuWuxuPt4rCEoDJRjKhACThadgdiwX-CcojBwYe.UjG80At'
# PAYPAL_API_USERNAME = 'canhhs91_api1.gmail.com'
# PAYPAL_API_PASSWORD = 'QS8S7PCTVJPRJVRB'
# PAYPAL_API_SIGNATURE = 'ArC72r3j1fs1tcJLuAukRJqngnhVA4uWJKg3LbYxGXZE2Kz25txF.myF'
PAYPAL_CALLBACK_HTTPS=True
PAYPAL_SOLUTION_TYPE='Sole'  #does not need create paypal acc
PAYPAL_LANDING_PAGE = 'Billing'
PAYPAL_BRAND_NAME = 'Green Point Trees'
PAYPAL_SANDBOX_MODE=False
PAYPAL_CURRENCY='USD'
PAYPAL_LOCALE= 'US'
# PAYPAL_HEADER_IMG = 'http://www.greenpointtrees.nyc/static/site/img/home-banner.jpg'

THUMBNAIL_FORMAT='PNG'