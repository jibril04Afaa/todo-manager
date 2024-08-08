using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoAPI.Entities
{
    public class Todo
    {
        public string ID { get; set; }
        public string TodoName { get; set; } = string.Empty;
        // public bool TodoStatus { get; set; }
    }
}