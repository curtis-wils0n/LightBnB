$(() => {
  const $reservationForm = $(`
  <form id="reservation-form" class="reservation-form">
    <p>Make a reservation</p>

    <div class="reservation__field-wrapper">
      <label for='start-date'>Start Date:</label> 
      <input type="date" name="start-date">
    </div>

    <div class="reservation__field-wrapper">
      <label for='end-date'>End Date:</label> 
      <input type="date" name="end-date">
    </div>

    <div class="reservation__field-wrapper">
      <button id='submit-button'>Make Reservation</button>
    </div>
  </form>
  `);

  window.$reservationForm = $reservationForm;

  $reservationForm.on('click', '#submit-button', function(event) {
    event.preventDefault();

    // Cookie parser by user kirlich on https://stackoverflow.com/a/15724300
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
    const propertyId = getCookie('property_id');
    const data = $($reservationForm).serialize();
    makeReservation(data, propertyId)
      .then(alert('Your reservation was successful!'))
      .then(views_manager.show('listings'));
  });
});