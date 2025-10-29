import type { FormData } from "../types/onSubmitFormSchema"

export const onSubmit = async (data: FormData, {...props}) => {
    const foodApiUrl = process.env.NEXT_PUBLIC_FOOD_API_URL
    props.setLoading(true)
    const barcode = data.id

    const queryFoodAPI = await fetch(`${foodApiUrl}/${barcode}.json`)
    const productDetails = await queryFoodAPI.json()

    // Check if product exist in the open food facts API 
    if (productDetails.status === 0) {
      props.toast.error(`Product not found with barcode ${data.id} entered. Try Again!`)
      props.setLoading(false)
      props.onClose() // Close drawer to return to main view
    } else {
      const { image_thumb_url } = productDetails.product
      const productData = { ...data, image: image_thumb_url }

      props.saveMoreItems.mutate(productData, {
        onSuccess: () => {
          props.toast.success("Pantry item saved successfully!");
          props.setLoading(false)
          props.reset(); // Clear form for potential reuse
          props.router.refresh(); // Refresh page to show updated data
          props.onClose() // Close drawer to return to main view
        },
        onError: (ops: { message: { toString: () => string } }) => {
          const errorMessage = ops.message.toString()
          props.toast.error(
            `Unable to save pantry item. Please try again. ${errorMessage}`
          )
          props.setLoading(false)
        }
      })
    }
}