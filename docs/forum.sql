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
    conteudo varchar(1000) not null,    
    likes integer,
    dislikes integer,
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
(default, 1, 'admin', 'admin', 'ADM'),
(default, 2, 'guigm@gmail.com', 'senhasenha', 'Bolota'),
(default, 2, 'juju_bla@gmail.com', '4321', 'JuVamp'),
(default, 2, 'bebel123@gmail.com', '1234', 'Bielzin');

insert into profiles values
(2, 'Músico, Desenvolvedor e Incel nas horas vagas', 'https://avatars.githubusercontent.com/u/64180881?v=4'),
(3, 'Web-Designer Desenvolvedora', null );

insert into categorias values
(default, 'Esporte', 'Discutimos sobre qualquer esporte'),
(default, 'Games', 'Jogos no geral'),
(default, 'Música', 'Músicas no Geral');

insert into sub_categorias values
(default, 1, 'Brasil na Copa', 'Brasil X Coreia'),
(default, 2, 'GOTY', 'Premiação de Elden Ring'),
(default, 3, 'Lil Nas X', 'Na direção do League of Legends');

insert into posts values
(default , 2, 2, '2022/12/08', 'Cleiton Votaria no Bolsonaro?', 0, 999),
(default , 2, 1, '2022/12/02', 'Odeio molieres na copa', 999, 0),
(default , 4, 1, '2022/12/02', 'CADÊ O CÁSSIO NA COPA?', 5, 0),
(default , 3, 3, '2022/12/01', 'O cara viro adm do lolKLKKKKKKKK', 0, 0);

insert into img_posts values
(1, 'https://pbs.twimg.com/media/EWXF8HPWoAEMuTl?format=png&name=small'),
(4, 'https://static1-br.millenium.gg/articles/5/11/28/5/@/131432-lil-nas-x-lol-article_image_t-1.png');

insert into comentarios values
(default, 4, 1, 'Claramente simKLLK', '2022/12/09', 0, 0),
(default, 3, 2, 'Omi na netKKKL', '2022/12/02', 0, 10),
(default, 2, 3, 'Na casa da sua mãe', '2022/12/02', 99, 0),
(default, 4, 4, 'Lil Nas X God apenas.', '2022/12/09', 999, 0);

insert into respostas values
(default, 2, 1, 'EntãoKKKKKKKK', '')
