import * as S from "./index.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    navn: yup.string().required("Du må skrive inn fullt navn."),
    epost: yup
      .string()
      .email("Du må skrive inn en gyldig epost adresse.")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      .required("Du må skrive inn en gyldig epost adresse."),
    mobilnummer: yup
      .number()
      .min(8, "Du må skrive inn fullt mobilnummer.")
      .required("Du må skrive inn fullt mobilnummer."),

    time: yup.string().required(),

    hovedfokus: yup
      .string()
      .required("Du må skrive inn hva du vil fokusere på."),

    annet: yup.string().optional(),
  })
  .required();

export default function BestillTime() {
  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="text-color jura-text text-2xl">Bestill time</h2>
      <p className="invisible font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Eventuelt skriv inn noe info her om hva som skal med.
      </p>
      <form
        action="https://formsubmit.co/h_thoner@hotmail.com"
        method="POST"
        className="space-y-8"
      >
        <div>
          <label for="fullt navn" className="text-color karla-text-bold">
            Fullt navn
          </label>
          <input
            name="Navn"
            type="text"
            id="fullt navn"
            className=" karla-text shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Fullt navn"
            required
            {...register("navn")}
          />
        </div>
        <div>
          <label for="epost" className="text-color karla-text-bold">
            E-post
          </label>
          <input
            name="Epost"
            type="email"
            id="epost"
            className="karla-text shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="navn@epost.com"
            required
            {...register("epost", {
              pattern: /^[A-Za-z0-9._%+-]+@\.$/,
            })}
          />
        </div>
        <div>
          <label for="mobilnummer" className="text-color karla-text-bold">
            Mobilnummer
          </label>
          <input
            name="Mobilnummer"
            type="number"
            id="mobilnummer"
            className="karla-text block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Mobilnummer"
            required
            {...register("mobilnummer")}
          />
        </div>
        <div>
          <label for="type time" className="text-color karla-text-bold">
            Velg type time
          </label>
          <select
            name="Type time"
            id="type time"
            className="karla-text block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            {...register("time")}
          >
            <option>Leksjon 25 minutter</option>
            <option>Leksjon 50 minutter</option>
            <option>Leksjon på bane, 9 hull</option>
            <option>Treningsgruppe for damer</option>
          </select>
        </div>
        <div>
          <label for="hovedfokus" className="text-color karla-text-bold">
            Hovedfokus
          </label>
          <input
            name="Hovedfokus"
            type="text"
            id="hovedfokus"
            className="karla-text block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Hovedfokus"
            required
            {...register("hovedfokus")}
          />
        </div>
        <div className="sm:col-span-2">
          <label for="annen info" className="text-color karla-text-bold">
            Annen info
          </label>
          <textarea
            name="Annen info"
            id="annen info"
            rows="6"
            className="karla-text block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Er det noe annet du vil tilføye?"
            {...register("annet")}
          ></textarea>
        </div>
        <S.ButtonDiv>
          <input type="hidden" name="_template" value="table"></input>
          <button
            type="submit"
            className="karla-text text-color bg-lime-900 hover:bg-lime-950 font-medium rounded-lg text-lg px-5 py-2.5 me-2 drop-shadow-2xl"
          >
            Send
          </button>
        </S.ButtonDiv>
      </form>
    </div>
  );
}
