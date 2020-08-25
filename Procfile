web: node app.js
labs: enable runtime-dyno-metadata -a $(heroku apps:info|grep ===|cut -d' ' -f2)
buildpacks: add heroku/nodejs
buildpacks: add https://github.com/DataDog/heroku-buildpack-datadog.git
config: add DD_AGENT_MAJOR_VERSION=7
