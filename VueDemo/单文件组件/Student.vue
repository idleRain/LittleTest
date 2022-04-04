<template>
  <div>
    <h3>{{ studentName }}</h3>
    <h3>{{ studentAge }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      studentName: '小丁',
      studentAge: 18
    }
  }
}
</script>