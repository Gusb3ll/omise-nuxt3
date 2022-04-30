<script setup>

const config = useRuntimeConfig().public

onMounted(() => {
  OmiseCard.configure({
    publicKey: config.omise.pubkey,
    image: 'https://cdn.omise.co/assets/dashboard/images/omise-logo.png',
    frameLabel: 'Push shop',
  })

  OmiseCard.configureButton('.checkout-button-1', {
    amount: 99900, // 999.00฿
  })

  OmiseCard.configureButton('.checkout-button-2', {
    amount: 6900, // 69.00$
    currency: 'usd',
  })

  OmiseCard.configureButton('.checkout-button-3', {
    amount: 42000, // 420.00¥
    currency: 'yen',
  })

  OmiseCard.attach()
})
</script>

<template>
  <div class="flex h-full">
    <div class="mx-auto">
      <h1 class="text-3xl my-8">
        omise.js with nuxt 3 example
      </h1>
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div id="item1" class="flex flex-row gap-x-4 px-8 py-2 border-2 border-black rounded-xl bg-white">
          <img src="~/assets/img/rei.jpg" alt="rei" class="h-32">
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl">
              Rei plush
            </h1>
            <h1 class="text-3xl">
              999฿
            </h1>
            <form>
              <button type="submit" class="checkout-button-1 bg-cyan-600 hover:bg-cyan-700 px-8 py-2 rounded-xl transition-all">
                <h1 class="text-xl text-white">
                  Buy
                </h1>
              </button>
            </form>
          </div>
        </div>
        <div id="item2" class="flex flex-row gap-x-4 px-8 py-2 border-2 border-black rounded-xl bg-white">
          <img src="~/assets/img/fumo.jpg" alt="rei" class="h-32">
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl">
              Fumo plush
            </h1>
            <h1 class="text-3xl">
              69$
            </h1>
            <form>
              <button type="submit" class="checkout-button-2 bg-cyan-600 hover:bg-cyan-700 px-8 py-2 rounded-xl transition-all">
                <h1 class="text-xl text-white">
                  Buy
                </h1>
              </button>
            </form>
          </div>
        </div>
        <div id="item3" class="flex flex-row gap-x-4 px-8 py-2 border-2 border-black rounded-xl bg-white">
          <img src="~/assets/img/astlofo.jpg" alt="rei" class="h-32 w-32">
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl">
              Astlofo plush
            </h1>
            <h1 class="text-3xl">
              420¥
            </h1>
            <form>
              <button type="submit" class="checkout-button-3 bg-cyan-600 hover:bg-cyan-700 px-8 py-2 rounded-xl transition-all">
                <h1 class="text-xl text-white">
                  Buy
                </h1>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
