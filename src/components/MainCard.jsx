import { RatingCard } from "./RatingCard";
import maleOne from "../assets/images/image-colton.jpg";
import femaleOne from "../assets/images/image-irene.jpg";
import femaleTwo from "../assets/images/image-anne.jpg";
import { ReviewCard } from "./ReviewCard";

export function MainCard() {
  return (
    <>
      <main className="w-full max-w-sm lg:max-w-6xl mx-auto gap-y-6 my-24 flex lg:grid flex-col lg:grid-cols-12 lg:gap-x-8">
        {/* intro block for desktop view */}
        <div className="lg:col-span-5">
          <h1 className="font-one font-bold md:text-start text-5xl/9 text-center text-Very-Dark-Magenta">
            10,000+ of our users love our products.
          </h1>
          <p className="font-one font-medium md:text-start mt-4 lg:mt-6  text-2xl text-center text-Dark-Grayish-Magenta">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        {/* END intro block */}

        {/* Ratings block */}
        <div className="lg:col-start-7 lg:col-span-6 flex flex-col gap-4">
          <div className="lg:self-start lg:w-4/6">
            <RatingCard>Rated 5 Stars in Reviews</RatingCard>
          </div>
          <div className="lg:self-center lg:w-4/6">
            <RatingCard>Rated 5 Stars in Report Guru</RatingCard>
          </div>
          <div className="lg:self-end lg:w-4/6">
            <RatingCard>Rated 5 Stars in BestTech</RatingCard>
          </div>
        </div>
        {/* END Ratings block */}

        <div className="lg:col-span-4">
          <ReviewCard personImage={maleOne} personName={"Colton Smith"}>
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </ReviewCard>
        </div>

        <div className="lg:col-span-4 lg:mt-6">
          <ReviewCard personImage={femaleOne} personName={"Irene Roberts"}>
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </ReviewCard>
        </div>

        <div className="lg:col-span-4 lg:mt-12">
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
