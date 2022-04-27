<% layout("layouts/boilerplate") %>
<div class="row">
  <h1 class="text-center">Edit Campground</h1>
  <div class="col-6 offset-3">
    <form
      action="/campgrounds/<%= Campground._id %>?_method=PUT "
      method="POST"
      novalidate
      class="validated-form"
    >
      <div class="mb-3">
        <label class="form-label" for="title">Title</label>
        <input
          class="form-control"
          type="text"
          id="title"
          name="campground[title]"
          value="<%= Campground.title %>"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="location">Location</label>
        <input
          class="form-control"
          type="text"
          id="location"
          name="campground[location]"
          value="<%= Campground.location %>"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>

      <div class="mb-3">
        <label class="form-label" for="image">Image Url</label>
        <input
          class="form-control"
          type="text"
          id="image"
          name="campground[image]"
          value="<%= Campground.image %>"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="price">Campground Price</label>
        <div class="input-group">
          <span class="input-group-text" id="price-label">$</span>
          <input
            id="price"
            type="text"
            class="form-control"
            placeholder="0.00"
            name="campground[price]"
            value="<%= Campground.price %>"
            aria-label="price"
            aria-describedby="price-label"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="description">Description</label>
        <textarea
          class="form-control"
          type="text"
          id="description"
          name="campground[description]"
          required
        >
        <%= Campground.description %></textarea
        >
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="mb-3">
        <button class="btn btn-info">Update Campground</button>
      </div>
    </form>

    <a href="/campgrounds/<%= Campground._id %> ">Back To Campgrounds</a>
  </div>
</div>
