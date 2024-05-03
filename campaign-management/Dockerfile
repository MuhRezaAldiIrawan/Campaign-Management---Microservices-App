FROM php:8.0-fpm

COPY composer.lock composer.json /var/www/campaign-management/

WORKDIR /var/www/campaign-management

RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libwebp-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libzip-dev

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_mysql zip exif pcntl
RUN docker-php-ext-configure gd --enable-gd --with-jpeg --with-webp --with-freetype
RUN docker-php-ext-install gd

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . /var/www/campaign-management

EXPOSE 9000

CMD ["php-fpm"]
