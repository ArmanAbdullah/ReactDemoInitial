using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly MovieDbContext _context;

        public MovieController(MovieDbContext context)
        {
            _context = context;
        }

        // GET: api/movie
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> GetMovies()
        {
            return await _context.Movies.ToListAsync();
        }

        // GET: api/movie/5
        [HttpGet("{Id}")]
        public async Task<ActionResult<Movie>> Getmovie(int Id)
        {
            var movie = await _context.Movies.FindAsync(Id);

            if (movie == null)
            {
                return NotFound();
            }

            return movie;
        }

        // PUT: api/movie/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{Id}")]
        public async Task<IActionResult> Putmovie(int Id, Movie movie)
        {
            movie.Id = Id;

            _context.Entry(movie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieExists(Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/movie
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Movie>> Postmovie(Movie movie)
        {
            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getmovie", new { Id = movie.Id }, movie);
        }

        // DELETE: api/movie/5
        [HttpDelete("{Id}")]
        public async Task<ActionResult<Movie>> Deletemovie(int Id)
        {
            var movie = await _context.Movies.FindAsync(Id);
            if (movie == null)
            {
                return NotFound();
            }

            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();

            return movie;
        }

        private bool MovieExists(int Id)
        {
            return _context.Movies.Any(e => e.Id == Id);
        }
    }
}
