--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" character varying(25) NOT NULL,
    id_user integer NOT NULL,
    visitcount integer DEFAULT 0 NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(110) NOT NULL,
    email character varying(120) NOT NULL,
    password_hash text NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, url, "shortUrl", id_user, visitcount, createdat) FROM stdin;
2	http://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/	pHSKkCzN4D	22	0	2022-08-06 14:50:02.197779
3	http://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/	37HniEoraz	22	0	2022-08-06 14:50:02.853945
5	http://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/	E7W9bXvEYw	22	0	2022-08-06 14:55:45.510908
6	http://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/	AqUE1pL9Wo	22	0	2022-08-06 14:55:47.313726
4	http://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/	Wup1wkzNU9	22	3	2022-08-06 14:50:03.527423
8	http://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/	RZudfcUaFT	31	4	2022-08-07 11:44:28.260207
9	http://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/	RohZujwJkm	32	0	2022-08-07 11:48:38.210957
10	http://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/	y0aSFzdehm	32	5	2022-08-07 11:48:39.744565
7	http://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/	d7Ji8rW3Np	22	89	2022-08-06 14:56:46.173003
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password_hash, createdat) FROM stdin;
1	cvbdebv dfd	g@gmail.com	$2b$10$4Ro5TuHHflEkCJPBn5aNGuW6rmHxHMpngA9vq.fYaPtgqSgTGoY8.	2022-08-05 15:53:12.274614
18	cvbdebv dfd	ga@gmail.com	$2b$10$jdlV0sBGw2T42vfsdKvLe.4Mn15k7U/kTr5zwvuoG.VDM9R8g5iIG	2022-08-06 09:54:39.13209
22	xdfr	ga@g.com	$2b$10$IOzCxJC5W/Kx2juSCeHg8.Oow3DcAw1Lo1qYcW0V1YWSicQ.4TW46	2022-08-06 09:58:53.131968
30	xdfr	gda@g.com	$2b$10$bXmRPe83joxoprY7v6hS5.QS9c0GBlsN3dqlmyBqcUHBFlsupoatC	2022-08-06 10:13:16.54917
31	aaa	a@g.com	$2b$10$CWbN1qLd1v3WwHoQMAl2Aen6mlUtF5X3gMAGEu/F.OcKkPbgeASTG	2022-08-07 11:43:10.585305
32	bbb	b@g.com	$2b$10$3lUf/GWSfi1GYnJbJVc/BOkGflM/BqfVfFs9XpF4uc/0Ohm1LJZa6	2022-08-07 11:48:00.280798
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 10, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 32, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

