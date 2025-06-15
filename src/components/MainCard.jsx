import { RatingCard } from "./RatingCard";
import maleOne from "../assets/images/image-colton.jpg";
import femaleOne from "../assets/images/image-irene.jpg";
import femaleTwo from "../assets/images/image-anne.jpg";
import { ReviewCard } from "./ReviewCard";

export function MainCard() {
  return (
    <>
      <main className="w-full my-24">
        <div className="flex flex-col md:grid md:grid-cols-2 max-w-sm items-center justify-center mx-auto py-8 gap-y-6">
          <h1 className="font-one font-bold text-5xl/9 text-center text-Very-Dark-Magenta">
            10,000+ of our users love our products.
          </h1>
          <p className="font-one font-medium text-2xl text-center text-Dark-Grayish-Magenta">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>

          <RatingCard>Rated 5 Stars in Reviews</RatingCard>
          <RatingCard>Rated 5 Stars in Report Guru</RatingCard>
          <RatingCard>Rated 5 Stars in BestTech</RatingCard>

          <ReviewCard personImage={maleOne} personName={"Colton Smith"}>
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </ReviewCard>
          <ReviewCard personImage={femaleOne} personName={"Irene Roberts"}>
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </ReviewCard>

          <ReviewCard personImage={femaleTwo} personName={"Anne Wallace"}>
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </ReviewCard>
        </div>
      </main>
    </>
  );
}
