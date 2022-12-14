drop database if exists forum;
create database forum charset=UTF8 collate utf8_general_ci;
use forum;

create table roles(
    id_role int primary key auto_increment not null,
    tipo varchar(10) not null
);

create table usuarios(
    id_user int primary key auto_increment not null,
    id_role int not null,
    email varchar(60) unique not null,
    senha varchar(30) not null,
    nome_user varchar(20) not null,
    foreign key(id_role) references roles(id_role)
);

create table profiles(
    id_user int not null,
    bio varchar(200),
    avatar mediumblob,
    foreign key(id_user) references usuarios(id_user)
);

create table categorias(
    id_categoria int primary key auto_increment not null,
    nome_categoria varchar(30) not null,
    descricao varchar(200) not null
);

create table sub_categorias(
    id_subcat int primary key auto_increment not null,
    id_categoria int not null,
    nome_subcat varchar(30) not null,
    descricao varchar(100) not null,
    foreign key (id_categoria) references categorias(id_categoria)
);

create table posts(
    id_pub int primary key auto_increment not null,
    id_user int not null,
    id_subcat int not null,
    data DATETIME not null,
    conteudo varchar(5000) not null,
    img mediumblob,    
    foreign key (id_user) references usuarios(id_user),
    foreign key (id_subcat) references sub_categorias(id_subcat)
);

create table comentarios(
    id_comentario int primary key auto_increment not null,
    id_user int not null,
    id_pub int not null,
    comentario varchar(5000) not null,
    data DATETIME not null,
    foreign key (id_user) references usuarios(id_user),
    foreign key (id_pub) references posts(id_pub) on delete cascade
);

create table respostas(
    id_resp int primary key auto_increment not null,
    id_user int not null,
    id_comentario int not null,
    resposta varchar(5000) not null,
    data DATETIME not null,
    foreign key (id_user) references usuarios(id_user),
    foreign key (id_comentario) references comentarios(id_comentario) on delete cascade
);

create table favoritos (
    id_fav int not null primary key auto_increment not null,
    id_user int not null,
    id_categoria int not null,
    foreign key (id_user) references usuarios(id_user),
    foreign key (id_categoria) references categorias(id_categoria)
);

show tables;

describe roles;
describe usuarios;
describe profiles;
describe categorias;
describe sub_categorias;
describe posts;
describe comentarios;
describe respostas;
describe favoritos;

insert into roles values
(default, 'ADMIN'),
(default, 'USER');

insert into usuarios values
(default, 1, 'admin', 'admin', 'ADM'),
(default, 2, 'guigm@gmail.com', 'senhasenha', 'Bolota'),
(default, 2, 'juju_bla@gmail.com', '4321', 'JuVamp'),
(default, 2, 'bebel123@gmail.com', '1234', 'Bielzin');

insert into profiles values
(2, 'Músico, Desenvolvedor e Incel nas horas vagas', to_base64(LOAD_FILE('https://avatars.githubusercontent.com/u/64180881?v=4'))),
(3, 'Web-Designer Desenvolvedora', to_base64(LOAD_FILE('https://avatars.githubusercontent.com/u/99231270?v=4')));

insert into categorias values
(default, 'Esporte', 'Discutimos sobre qualquer esporte'),
(default, 'Games', 'Jogos no geral'),
(default, 'Música', 'Músicas no Geral');

insert into sub_categorias values
(default, 1, 'Brasil na Copa', 'Brasil X Coreia'),
(default, 2, 'GOTY', 'Premiação de Elden Ring'),
(default, 3, 'Lil Nas X', 'Na direção do League of Legends');

insert into posts values
(default , 2, 2, '2022/12/08 20:23:00', 'Cleiton Votaria no Bolsonaro?', to_base64(LOAD_FILE('D:/SENAI2022/ProjetinForum/docs/assets/clieton.jpg'))),
(default , 2, 1, '2022/12/02 17:32:00', 'Odeio molieres na copa', null),
(default , 4, 1, '2022/12/02 16:05:00', 'CADÊ O GABIGOL NA COPA?', to_base64(LOAD_FILE('https://tntsports.com.br/__export/1670610642330/sites/esporteinterativo/img/2022/11/07/gabigol-selecao-brasileira-3_1.jpg_1902800913.jpg'))),
(default , 3, 3, '2022/12/01 22:48:00', 'O cara viro adm do lolKLKKKKKKKK', to_base64(LOAD_FILE('https://static1-br.millenium.gg/articles/5/11/28/5/@/131432-lil-nas-x-lol-article_image_t-1.png')));

insert into comentarios values
(default, 4, 1, 'Claramente sim powKLLK', '2022/12/09 20:41:00'),
(default, 3, 2, 'Omi na netKKKL', '2022/12/02 18:04:00'),
(default, 2, 3, 'Em casa pq é muito buxaKKJKKJK', '2022/12/02 16:32:00'),
(default, 4, 4, 'Lil Nas X God apenas.', '2022/12/09 23:57:00');

insert into respostas values
(default, 2, 1, 'EntãoKKK', '2022/12/09 21:01:00'),
(default, 3, 3, 'RESPEITA O DEUS DO MENGÃO', '2022/12/02 16:48:00');

insert into favoritos values
(default, 2, 2),
(default, 2, 1),
(default, 2, 3),
(default, 3, 3),
(default, 3, 1),
(default, 4, 1),
(default, 4, 2);

select * from roles;
select * from usuarios;
select * from profiles;
select * from categorias;
select * from sub_categorias;
select * from posts;
select * from comentarios;
select * from respostas;
select * from favoritos;

CREATE VIEW vw_posts AS
SELECT p.id_pub, p.id_user, p.data, p.conteudo, p.img, u.nome_user from usuarios u
INNER JOIN posts p 
ON p.id_user = u.id_user
ORDER BY p.id_pub DESC;

select * from vw_posts;

CREATE VIEW vw_resp AS
SELECT r.*, u.nome_user FROM respostas r
INNER JOIN usuarios u 
ON r.id_user = u.id_user;

select * from vw_resp;

CREATE VIEW vw_coment AS
SELECT p.id_pub, c.id_comentario, c.comentario, c.data as data_coment, u.nome_user, r.resposta, r.nome_user as nome_resp, r.data as data_resp from posts p
INNER JOIN comentarios c 
ON c.id_pub = p.id_pub
INNER JOIN usuarios u
ON u.id_user = c.id_user
LEFT JOIN vw_resp r 
ON r.id_comentario = c.id_comentario;

select * from vw_coment;

CREATE VIEW vw_usuarios AS
SELECT u.*, p.bio, p.avatar, c.nome_categoria, r.tipo from usuarios u
LEFT JOIN profiles p
on u.id_user = p.id_user
LEFT JOIN favoritos f 
on u.id_user = f.id_user
LEFT JOIN categorias c 
on c.id_categoria = f.id_categoria
INNER JOIN roles r 
on r.id_role = u.id_role;

select * from vw_usuarios;
