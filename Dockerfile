FROM ruby:latest
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /featuretoggles
WORKDIR /featuretoggles
COPY Gemfile /featuretoggles/Gemfile
COPY Gemfile.lock /featuretoggles/Gemfile.lock
RUN bundle install
COPY . /featuretoggles

EXPOSE 3000

CMD ["foreman", "start", "-f", "Procfile.dev"]
