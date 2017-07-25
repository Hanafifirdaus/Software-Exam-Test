using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pagination.Models
{
    public class Daftar
    {
        public string nama { get; set; }
        public string alamat { get; set; }
        public Daftar(string Nama, string Alamat)
        {
            nama = Nama;
            alamat = Alamat;
        }
    }
}