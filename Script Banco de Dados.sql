create domain Desc100 varchar(100);

create extension if not exists "uuid-ossp";

--Tabela Usuarios

create table Usuarios (
	usuario_ID uuid DEFAULT uuid_generate_v4() primary key not null,
	usuario_nome desc100 null,
	usuario_email desc100 null,
	nome_usuario desc100 null,
	usuario_senha desc100 null,
	usuario_tipo varchar(50) default 'Comum' check(usuario_tipo in('Comum', 'Administrador')) not null,
	usuario_status_registro varchar(8) default 'Ativo' check(usuario_status_registro in ('Ativo', 'Inativo')) not null,
	usuario_data_criacao date default CURRENT_DATE not null
);

--Tabela Acoes

create table Acoes (
	acao_ID SERIAL primary key not null,
	tipo_acao desc100 check(tipo_acao in('Troca de senha','Troca de nome', 'Troca de usuário', 'Troca de nome e usuário')) not null,
	data_acao timestamp default CURRENT_TIMESTAMP not null,
	ID_usuario uuid not null,
	foreign key (ID_usuario) REFERENCES Usuarios(usuario_ID)
);