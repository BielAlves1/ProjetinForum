drop database if exists forum;
create database forum charset=UTF8 collate utf8_general_ci;
use forum;

create table usuarios(
    id_user integer primary key auto_increment not null,
    email varchar(35) not null unique,
    senha varchar(20) not null,
    nome_user varchar(30) not null,
    tipo_avatar varchar(5) not null,
    avatar mediumblob
);

create table categorias(
    id_categoria integer primary key auto_increment not null,
    tipo varchar(10) not null,
    nome_categoria varchar(25) not null,
    qntd_users integer not null
);

create table posts(
    id_post integer primary key auto_increment not null,
    id_user integer not null,
    id_categoria integer not null,
    pergunta varchar(200),
    likes integer,
    dislikes integer,
    foreign key (id_user) references usuarios(id_user) on delete cascade,
    foreign key (id_categoria) references categorias(id_categoria) on delete cascade
);

create table respostas(
    id_resp integer primary key auto_increment not null,
    id_user integer not null,
    id_post integer not null,
    reposta varchar(200),
    likes integer,
    dislikes integer,
    foreign key (id_post) references posts(id_post) on delete cascade,
    foreign key (id_user) references usuarios(id_user) on delete cascade
);

describe usuarios;
describe categorias;
describe posts;
describe respostas;
show tables;

insert into usuarios values
(default,"bolota@gmail.com","bo1234","bolotagem", '.png',load_file("C:/Users/Heitor/Desktop/ProjetinForum/assets/img_561543.png")),
(default,"bebel@gmail.com","bel1234","Bebel cu de mel", '.png',load_file("C:/Users/Heitor/Desktop/ProjetinForum/assets/img_561543.png")),
(default,"itimania@gmail.com","it1234","Italo", '.png',load_file("C:/Users/Heitor/Desktop/ProjetinForum/assets/img_561543.png"));
insert into categorias values
(default, "Quest", "Duvidas sobre a vida", 100),
(default, "Futboll", "VaiBrasil?", 100),
(default, "Tecnologia", "TecNews", 100);
insert into posts values
(default, 1, 1, "biel e guei?", 100,1),
(default, 2, 2, "Vai Brasil", 1000,0),
(default, 3, 3, "Computador Bala", 1,10);
insert into respostas values
(default, 1, 1, "ss", 100,1),
(default, 2, 2, "ss", 1000,0),
(default, 3, 3, "ss", 1,10);

-- select * from 
-- drop table 