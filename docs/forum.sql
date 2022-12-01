drop database if exists forum;
create database forum charset=UTF8 collate utf8_general_ci;
use forum;

create table usuarios(
    id_user int primary key auto_increment,
    email varchar(60) not null,
    senha varchar(30) not null,
    nome_user varchar(20) unique not null,
    avatar mediumblob
);

create table categorias(
    id_categoria int primary key auto_increment,
    nome_categoria varchar(30) not null,
    descricao varchar(200) not null
);

create table sub_categorias(
    id_subcat int primary key auto_increment,
    id_categoria int not null,
    nome_subcat varchar(30) not null,
    descricao varchar(100) not null,
    foreign key (id_categoria) references categorias(id_categoria)
);

create table posts(
    id_pub int primary key auto_increment,
    id_user int not null,
    id_subcat int not null,
    data DATETIME not null,
    pergunta varchar(1000) not null,
    likes integer,
    dislikes integer,
    img mediumblob,
    foreign key (id_user) references usuarios(id_user),
    foreign key (id_subcat) references sub_categorias(id_subcat)
);

create table comentarios(
    id_comentario int primary key auto_increment,
    id_user int not null,
    id_pub int not null,
    comentario varchar(1000) not null,
    data DATETIME not null,
    likes integer,
    dislikes integer,
    foreign key (id_user) references usuarios(id_user),
    foreign key (id_pub) references posts(id_pub)
);

create table respostas(
    id_resp int primary key auto_increment,
    id_comentario int not null,
    id_user int not null,
    resposta varchar(500) not null,
    likes integer,
    dislikes integer,
    foreign key (id_user) references usuarios(id_user),
    foreign key (id_comentario) references comentarios(id_comentario)
);

create table favoritos (
    id_fav int not null primary key auto_increment,
    id_user int not null,
    id_categoria int not null,
    foreign key (id_user) references usuarios(id_user),
    foreign key (id_categoria) references categorias(id_categoria)
);

show tables;

describe usuarios;
describe categorias;
describe sub_categorias;
describe posts;
describe comentarios;
describe respostas;
describe favoritos;
