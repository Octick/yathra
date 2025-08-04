<template>
  <div>
    <Navi />
    <div class="main res-py">
      <h1>REFUND POLICY</h1>
      <br />

      <h3>REFUND PROCESS</h3>
      <p>
        Refunds are approved and processed via the airline(s) your tickets are
        booked with. <br> All refunds are subject to approval by the airline and can
        undergo a processing period of up to 6 to 10 weeks. Refunds will not be
        processed by Travel Prime LTD until the full completion of this approval
        process by the airline.
      </p>

      <h3>CANCELLATION BEFORE TICKET ISSUE</h3>
      <p>Should you or any member of your party be forced to cancel your flight or holiday, we must be notified, in writing, by the person who made the booking and who is therefore responsible for the payment of the cancellation charges.</p>

      <h3>CANCELLATION AFTER TICKET ISSUE</h3>
      <p>Cancellation will result in loss of 100% of total cost of all travel arrangements in most cases. Please consult your travel consultant. Charter flights carry a 100% cancellation fee both before and after ticket issue.</p>
    </div>
  </div>
</template>

<script>
import Navi from "../components/navigation-com.vue";

export default {
  components: {
    Navi,
  },
};
</script>
<style scoped>
h1 {
  margin-top: 100px;
  text-align: center;
}

h3 {
  margin-top: 50px;
}

h5 {
  text-align: center;
}

.main{
    min-height: 100vh;
}

.last-modified {
  text-align: end;
}
</style>
