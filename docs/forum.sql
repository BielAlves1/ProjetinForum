drop database if exists forum;
create database forum charset=UTF8 collate utf8_general_ci;
use forum;

create table usuarios(
    id_user integer primary auto_increment key not null,
    email varchar(35) not null unique,
    senha varchar(20) not null,
    nome_user varchar(30) not null,
    avatar mediumblob
);

create table posts(
    id_user integer auto_increment not null,
    pergunta varchar(200),
    reposta varchar(200),
    likes integer,
    dislikes integer,
    foreign key (id_user) references usuarios(id_user)
);

create table categorias(
    id_categoria integer auto_increment not null,
    tipo varchar(10) not null,
    nome_categoria varchar(25) not null,
);

show tables;