using Pagination.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pagination.Data
{
    public static class ListRepository
    {
        public static List<Teams> Team { get; set; }
        public static List<Kumpuls> Kumpul { get; set; }

        static ListRepository()
        {
            InitData();
        }
        private static void InitData()
        {
            var team = new List<Teams>()
            {
                new Teams{Name = "User", Nilai = 0 },
            };

            var kumpul = new List<Kumpuls>()
            {
                new Kumpuls{},
            };

            Team = team;
            Kumpul = kumpul;
        }
    }
}