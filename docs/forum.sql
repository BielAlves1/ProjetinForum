drop database if exists forum;
create database forum charset=UTF8 collate utf8_general_ci;
use forum;

create table usuarios(
    id_user integer primary key auto_increment not null,
    email varchar(35) not null unique,
    senha varchar(20) not null,
    nome_user varchar(30) not null,
    avatar mediumblob
);

create table posts(
    id_post integer primary key auto_increment not null,
    id_user integer not null,
    pergunta varchar(200),
    reposta varchar(200),
    likes integer,
    dislikes integer,
    foreign key (id_user) references usuarios(id_user)
);

create table categorias(
    id_categoria integer primary key auto_increment not null,
    tipo varchar(10) not null,
    nome_categoria varchar(25) not null
);

describe usuarios;
describe posts;
describe categorias;
show tables;

insert into usuarios values
(default,"bolota@gmail.com","bo1234","bolotagem", default),
(default,"bebel@gmail.com","bel1234","Bebel cu de mel", default),
(default,"itimania@gmail.com","it1234","Italo", default);
insert into posts values
(default, 4, "biel e guei?","ss!!", 100,1),
(default, 5, "Vai Brasil","ss!!", 1000,0),
(default, 6, "Computador Bala","ss!!", 1,10);
insert into categorias values
(default, "Quest", "Duvidas sobre a vida"),
(default, "Futboll", "VaiBrasil?"),
(default, "Tecnologia", "TecNews");