FROM ruby:latest

RUN apt-get install curl && curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /featuretoggles

WORKDIR /featuretoggles

COPY package.json /featuretoggles
RUN npm install

COPY Gemfile /featuretoggles/Gemfile
COPY Gemfile.lock /featuretoggles/Gemfile.lock

RUN gem install foreman
RUN bundle install

VOLUME /featuretoggles/node_modules

COPY . /featuretoggles

EXPOSE 3000

CMD ["foreman", "start", "-f", "Procfile.dev", "-p", "3000"]
