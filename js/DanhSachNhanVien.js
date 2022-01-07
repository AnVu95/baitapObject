function DSNhanVien() {
    this.mangNV = [];
    this.them = function (nv) {
        this.mangNV.push(nv);
    }

    this.timViTri = function (id) {
        var viTri = -1;
        this.mangNV.map(function (nv, index) {
            if (nv.taiKhoan == id) {
                viTri = index;
            }
        });
        return viTri;
    }
    this.xoa = function (id) {
        var viTri = this.timViTri(id);
        if (viTri != -1) {
            this.mangNV.splice(viTri, 1);
        } else {
            alert("Khong tim thay nv can xoa");
        }
    }

    this.capNhap = function (nv) {
        var viTri = this.timViTri(nv.taiKhoan);
        if (viTri != -1) {
             this.mangNV[viTri] = nv;
        } else {
             alert("Không tìm thấy SV để cập nhập");

        }
   }

    this.searchName = function (keyword) {
        var mangTK = [];
        var keywordLower = keyword.toLowerCase();
        this.mangNV.map(function (nv) {
            var nameLower = nv.xepLoai.toLowerCase();
            var indexName = nameLower.indexOf(keywordLower);
            if (indexName > -1) {
                mangTK.push(nv);
            }
        });
        return mangTK;
    }
}
