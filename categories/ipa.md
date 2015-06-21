---
layout: category
title: IPAs (Pale Ales, APAs)
permalink: '/categories/ipa.html'
---

## Blog Posts

{% for post in site.categories['ipa'] %}
  * {{ balanced | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
