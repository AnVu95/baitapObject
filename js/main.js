var dsnv = new DSNhanVien();
var validation = new Validation();
getLocalStorage();

function getELE(id) {
    return document.getElementById(id);
}

function themNhanVien() {
    var user = getELE("tknv").value;
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngay = getELE("datepicker").value;
    var luong = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;
    isValid &= validation.checkEmpty(user, "tbTKNV", "Tài khoản không được để trống") && validation.checkID(user, "tbTKNV", "Tài khoản đã sử dụng", dsnv.mangNV);
    isValid &= validation.checkEmpty(ten, "tbTen", "Tên nhân viên không được để trống") && validation.checkName(ten, "tbTen", "Tên nhân viên chỉ chứa ký tự chữ");
    isValid &= validation.checkEmpty(email, "tbEmail", "Email nhân viên không được để trống") && validation.checkEmail(email, "tbEmail", "Email nhân viên chưa đúng định dạng");
    isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu nhân viên không được để trống") && validation.checkPass(pass, "tbMatKhau", "Mật khẩu nhân viên chưa đúng định dạng");
    isValid &= validation.checkEmpty(ngay, "tbNgay", "Hãy nhập ngày làm của bạn") && validation.checkDate(ngay, "tbNgay", "Vui lòng nhập đúng theo định dạng dd/mm/yyyy");
    isValid &= validation.checkEmpty(luong, "tbLuongCB", "Lương nhân viên không được để trống") && validation.checkLuong(luong, "tbLuongCB", "Lương nhân viên từ 1.000.000 - 20.000.000");
    isValid &= validation.checkSelect("chucvu", "tbChucVu", "Chưa chọn chức vụ");
    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm nhân viên không được để trống") && validation.checkGio(gioLam, "tbGiolam", "Giờ làm nhân trong tháng 80 - 200 giờ");
    if (isValid) {
        var nv = new nhanVien(user, ten, email, pass, ngay, Number(luong), chucVu, Number(gioLam));
        nv.tinhLuong()
        nv.xepLoaiNV();
        dsnv.them(nv);

        hienThiTable(dsnv.mangNV);
        setLocalStorage(dsnv.mangNV);
    }

}

function hienThiTable(mang) {
    var content = "";
    mang.map(function (nv) {
        var tr = `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.tenNV}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoai}</td>
        <td>
            <button class="btn btn-danger" onclick="xoaNV('${nv.taiKhoan}')">Xoá</button>
            <button class="btn btn-info" onclick="xemNV('${nv.taiKhoan}')" id="" data-toggle="modal" data-target="#myModal">Xem</button>
        </td>
        </tr>`

        content += tr;
    });
    getELE("tableDanhSach").innerHTML = content;
}

function setLocalStorage(mang) {
    localStorage.setItem("DSNV", JSON.stringify(mang));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }
}
getELE("btnThemNV").onclick = themNhanVien;

function xoaNV(id) {
    dsnv.xoa(id);
    setLocalStorage(dsnv.mangNV);
    hienThiTable(dsnv.mangNV);
}

function xemNV(id) {
    var viTri = dsnv.timViTri(id);
    if (viTri != -1) {
        var nv = dsnv.mangNV[viTri];
        getELE("tknv").value = nv.taiKhoan;
        getELE("tknv").disabled = true;
        getELE("name").value = nv.tenNV;
        getELE("email").value = nv.email;
        getELE("password").value = nv.matKhau;
        getELE("datepicker").value = nv.ngayLam;
        getELE("luongCB").value = nv.luongCB;
        getELE("chucvu").value = nv.chucVu;
        getELE("gioLam").value = nv.gioLam;
    } else {
        alert("không tìm thấy nhân viên cần xem")
    }
    setLocalStorage(dsnv.mangNV);
    hienThiTable(dsnv.mangNV);
    getELE("btnThemNV").disabled = true;
}

function capNhapNV() {
    var user = getELE("tknv").value;
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngay = getELE("datepicker").value;
    var luong = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;
    isValid &= validation.checkEmpty(ten, "tbTen", "Tên nhân viên không được để trống") && validation.checkName(ten, "tbTen", "Tên nhân viên chỉ chứa ký tự chữ");
    isValid &= validation.checkEmpty(email, "tbEmail", "Email nhân viên không được để trống") && validation.checkEmail(email, "tbEmail", "Email nhân viên chưa đúng định dạng");
    isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu nhân viên không được để trống") && validation.checkPass(pass, "tbMatKhau", "Mật khẩu nhân viên chưa đúng định dạng");
    isValid &= validation.checkEmpty(ngay, "tbNgay", "Hãy nhập ngày làm của bạn");
    isValid &= validation.checkEmpty(luong, "tbLuongCB", "Lương nhân viên không được để trống") && validation.checkLuong(luong, "tbLuongCB", "Lương nhân viên từ 1.000.000 - 20.000.000");
    isValid &= validation.checkSelect("chucvu", "tbChucVu", "Chưa chọn chức vụ");
    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm nhân viên không được để trống") && validation.checkGio(gioLam, "tbGiolam", "Giờ làm nhân trong tháng 80 - 200 giờ");
    if (isValid) {
        var nv = new nhanVien(user, ten, email, pass, ngay, Number(luong), chucVu, Number(gioLam));
        nv.tinhLuong()
        nv.xepLoaiNV();
        dsnv.capNhap(nv);

        hienThiTable(dsnv.mangNV);
        setLocalStorage(dsnv.mangNV);
    }
}
getELE("btnCapNhat").onclick = capNhapNV;

function searchNameNV() {
    var keyword = getELE("searchName").value.trim();
    var mangTK = [];
    mangTK = dsnv.searchName(keyword);

    hienThiTable(mangTK);
}
getELE("searchName").addEventListener("keyup", searchNameNV);
