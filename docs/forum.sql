drop database if exists forum;
create database forum charset=UTF8 collate utf8_general_ci;
use forum;

create table cargos(
    id_cargo int primary key auto_increment not null,
    tipo varchar(10) not null
);

create table usuarios(
    id_user int primary key auto_increment not null,
    id_cargo int not null,
    email varchar(60) unique not null,
    senha varchar(30) not null,
    nome_user varchar(20) not null,
    foreign key(id_cargo) references cargos(id_cargo)
);

create table profiles(
    id_user int not null
    bio varchar(200),
    avatar mediumblob
    foreign key(id_user) references usuarios(id_user)
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

create table img_posts(
    id_pub int,
    img mediumblob,
    foreign key (id_pub) references posts(id_pub)
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
    id_user int not null,
    id_comentario int not null,
    resposta varchar(500) not null,
    data DATETIME not null,
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

describe cargos;
describe usuarios;
describe profiles;
describe categorias;
describe sub_categoria;
describe posts;
describe img_posts;
describe comentarios;
describe respostas;
describe favoritos;

insert into cargos values
(default, 'ADMIN'),
(default, 'USER');

insert into usuarios values
(1, 1, 'bebel123@gmail.com', '1234', 'Bielzin'),
(2, 2, 'guigm@gmail.com', 'senhasenha', 'Bolota'),
(3, 2, 'juju_bla@gmail.com', '4321', 'JuVamp');

insert into profiles values
(2, 'Músico, Desenvolvedor e Incel nas horas vagas', 'https://avatars.githubusercontent.com/u/64180881?v=4'),
(3, 'Web-Designer Desenvolvedora', null );

insert into categorias
(1, 'Esporte', 'Discutimos sobre qualquer esporte'),
(2, 'Games', 'Jogos no geral'),
(3, 'Música', 'Músicas no Geral');
