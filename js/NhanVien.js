function nhanVien(user, ten, email, pass, ngay, luong, chucVu, gioLam) {
    this.taiKhoan = user;
    this.tenNV = ten;
    this.email = email;
    this.matKhau = pass;
    this.ngayLam = ngay;
    this.luongCB = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";
    this.tinhLuong = function () {
        if (this.chucVu == "Sếp") {
            this.tongLuong = this.luongCB * 3;
        } else if (this.chucVu == "Trưởng phòng") {
            this.tongLuong = this.luongCB * 2;
        } else {
            this.tongLuong = this.luongCB * 1;
        }
    }
    this.xepLoaiNV = function () {
        if (this.gioLam >= 192) {
            this.xepLoai = "Xuất sắc";
        } else if (this.gioLam >= 176) {
            this.xepLoai = "Giỏi";
        } else if (this.gioLam >= 160) {
            this.xepLoai = "Khá";
        } else {
            this.xepLoai = "Trung bình";
        }
    }
}