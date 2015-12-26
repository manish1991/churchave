#from django.settings import MEDIA_URL
from django import template
from urlparse import urlparse

from django.conf import settings
register = template.Library()


class UrlNode(template.Node):
    def __init__(self):
        pass
    def render(self, context):
        request = context['request']
        ab_uri = request.build_absolute_uri('')
        url_data = urlparse(ab_uri)
        return url_data.scheme+'://'+url_data.netloc+'/'




@register.simple_tag
def media(path):
    return settings.MEDIA_URL + path


@register.simple_tag
def get(obj, field):
    return getattr(obj, field)


@register.assignment_tag
def getlist(query_dict, field):
    return query_dict.getlist(field)


@register.filter
def get_path(url):
    return settings.PROJECT_ROOT + url



@register.tag
def base_url(parser, token):
    return UrlNode()
 
