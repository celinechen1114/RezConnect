<button onClick={() => setNewPost(true)}>New Post</button>
        {newPost && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={handleChangeTitle}
              placeholder="Post Title"
              required
            />
            <textarea
              value={body}
              onChange={handleChangeBody}
              placeholder="Post Content"
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}


{/* {selectedPost && 
        <div className="selectedPost">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
        </div>
      } */}