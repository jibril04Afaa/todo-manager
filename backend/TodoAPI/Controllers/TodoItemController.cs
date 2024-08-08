using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoAPI.Data;
using TodoAPI.Entities;

namespace TodoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemController: ControllerBase
    {
        // inject data context  
        private readonly DataContext _context;
    
        // constructor
        
        public TodoItemController(DataContext context)
        {
            _context = context;
        }


        // return a Todo item
        [HttpGet]
        public async Task<ActionResult<List<Todo>>> GetAllTodos()
        {
            var todos = await _context.Todos.ToListAsync();
            
            // debugging
            // if (todos == null || !todos.Any())
            // {
            //     return NotFound("No Todo items found.");
            // }
            

            return Ok(todos);
        } 
        
        // get a single entry
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Todo>>> GetTodo(string id)
        {
            var todo = await _context.Todos.FindAsync(id);

            if (todo is null)
            {
                return NotFound("Todo not found. ");
            }
            return Ok(todo);
        }
        
        // create Todo with POST
        [HttpPost]
        public async Task<ActionResult<List<Todo>>> AddTodo(Todo todo )
        {
            _context.Todos.Add(todo);
            await _context.SaveChangesAsync();
            
            return Ok(await _context.Todos.ToListAsync());
        }
        
        // update Todo with PUT method
        [HttpPut]
        public async Task<ActionResult<List<Todo>>> UpdateTodo(Todo updatedTodo )
        {
            var dbTodo = await _context.Todos.FindAsync(updatedTodo.ID);

            if (dbTodo is null)
            {
                return NotFound("Todo not found. ");
            }

            dbTodo.TodoName = updatedTodo.TodoName;
            dbTodo.ID = updatedTodo.ID;
            
            // save changes
            await _context.SaveChangesAsync();
            
            return Ok(await _context.Todos.ToListAsync());
        }
        
        
        // delete Todo with DELETE method
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Todo>>> DeleteTodo(string id)
        {
            var dbTodo = await _context.Todos.FindAsync(id);

            if (dbTodo is null)
            {
                return NotFound("Todo not found. ");
            }

            _context.Todos.Remove(dbTodo);
            
            // save changes
            await _context.SaveChangesAsync();
            
            return Ok(await _context.Todos.ToListAsync());
        }
        
    }
}