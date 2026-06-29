-- ==========================================================
-- A2KF Smart Pricing
-- Migration 001 - Estrutura Inicial
-- ==========================================================

create extension if not exists pgcrypto;

-- ==========================================================
-- PRODUCTS
-- ==========================================================

create table if not exists products (

    id uuid primary key default gen_random_uuid(),

    sku text unique not null,

    ean text,

    gtin text,

    name text not null,

    normalized_name text,

    search_key text,

    slug text,

    brand text,

    category text,

    description text,

    price numeric(10,2),

    promo_price numeric(10,2),

    cost numeric(10,2),

    stock integer default 0,

    weight text,

    volume text,

    flavor text,

    size text,

    image text,

    url text,

    status text default 'active',

    last_sync timestamp,

    created_at timestamp default now(),

    updated_at timestamp default now()

);

-- ==========================================================
-- COMPETITORS
-- ==========================================================

create table if not exists competitors (

    id uuid primary key default gen_random_uuid(),

    product_id uuid not null references products(id) on delete cascade,

    store_name text not null,

    product_url text,

    product_name text,

    price numeric(10,2),

    shipping numeric(10,2),

    available boolean default true,

    collected_at timestamp default now()

);

-- ==========================================================
-- PRICE ANALYSIS
-- ==========================================================

create table if not exists price_analysis (

    id uuid primary key default gen_random_uuid(),

    product_id uuid not null references products(id) on delete cascade,

    market_min numeric(10,2),

    market_max numeric(10,2),

    market_average numeric(10,2),

    suggested_price numeric(10,2),

    confidence numeric(5,2),

    status text,

    analysis_date timestamp default now()

);

-- ==========================================================
-- ALERTS
-- ==========================================================

create table if not exists alerts (

    id uuid primary key default gen_random_uuid(),

    product_id uuid references products(id) on delete cascade,

    alert_type text,

    title text,

    message text,

    read boolean default false,

    created_at timestamp default now()

);

-- ==========================================================
-- SYNC LOGS
-- ==========================================================

create table if not exists sync_logs (

    id uuid primary key default gen_random_uuid(),

    source text,

    total_records integer,

    inserted integer,

    updated integer,

    failed integer,

    status text,

    message text,

    started_at timestamp,

    finished_at timestamp,

    created_at timestamp default now()

);

-- ==========================================================
-- ÍNDICES
-- ==========================================================

create index if not exists idx_products_name
on products(name);

create index if not exists idx_products_brand
on products(brand);

create index if not exists idx_products_category
on products(category);

create index if not exists idx_products_search_key
on products(search_key);

create index if not exists idx_products_sku
on products(sku);

create index if not exists idx_products_ean
on products(ean);

create index if not exists idx_competitors_product
on competitors(product_id);

create index if not exists idx_analysis_product
on price_analysis(product_id);

create index if not exists idx_alert_product
on alerts(product_id);

-- ==========================================================
-- UPDATED_AT
-- ==========================================================

create or replace function update_updated_at_column()
returns trigger
language plpgsql
as
$$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists update_products_updated_at
on products;

create trigger update_products_updated_at

before update

on products

for each row

execute function update_updated_at_column();
