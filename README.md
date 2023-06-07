## Tata Cara Instalasi dan Penggunaan

### 1. Jalankan PostgreSQL
Pastikan docker compose telah terinstall kemudian jalankan command berikut pada direktori utama
```bash
$ docker compose up -d
```

### 2. Jalankan Auth service
Selanjutnya, setelah database berhasil dijalankan. Jalankan auth service dengan command berikut:
```bash
$ cd auth
$ npm run dev # atau node index.js
```

### 3. Jalankan Logistic service
Selanjutnya, setelah database berhasil dijalankan. Jalankan auth service dengan command berikut:
```bash
$ cd logistic
$ npm run dev # atau node index.js
```

### 4. Jalankan API Gateway
Selanjutnya, setelah dua service berhasil dijalankan. Jalankan API Gateway sehingga seluruh rute merujuk pada localhost:5000 dengan command berikut
```bash
$ cd api-gateway
$ npm start
```

### 5. Dokumentasi
Silakan lihat catatan swagger yang ada pada file yml. Dapat dicopy pada Swagger editor [disini](https://editor.swagger.io/)