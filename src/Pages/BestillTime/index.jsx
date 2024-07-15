import * as S from "./index.styles";

export default function BestillTime() {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="text-color jura-text text-2xl pb-8">Bestill time</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Eventuelt skriv inn noe info her om hva som skal med.
      </p>
      <form action="#" className="space-y-8">
        <div>
          <label for="fullt navn" className="text-color karla-text-bold">
            Fullt navn
          </label>
          <input
            type="text"
            id="fullt navn"
            className=" karla-text shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Fullt navn"
            required
          />
        </div>
        <div>
          <label for="epost" className="text-color karla-text-bold">
            E-post
          </label>
          <input
            type="email"
            id="epost"
            className="karla-text shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="navn@epost.com"
            required
          />
        </div>
        <div>
          <label for="mobilnummer" className="text-color karla-text-bold">
            Mobilnummer
          </label>
          <input
            type="number"
            id="mobilnummer"
            className="karla-text block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Mobilnummer"
            required
          />
        </div>
        <div>
          <label for="type time" className="text-color karla-text-bold">
            Velg type time
          </label>
          <select
            id="type time"
            className="karla-text block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          >
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
            <option>Type 4</option>
          </select>
        </div>
        <div>
          <label for="hovedfokus" className="text-color karla-text-bold">
            Hovedfokus
          </label>
          <input
            type="text"
            id="hovedfokus"
            className="karla-text block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Hovedfokus"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label for="annen info" className="text-color karla-text-bold">
            Annen info
          </label>
          <textarea
            id="annen info"
            rows="6"
            className="karla-text block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Er det noe annet du vil tilføye?"
          ></textarea>
        </div>
        <S.ButtonDiv>
          <button
            type="button"
            className="karla-text text-color bg-lime-900 hover:bg-lime-950 font-medium rounded-lg text-lg px-5 py-2.5 me-2 drop-shadow-2xl"
          >
            Send
          </button>
        </S.ButtonDiv>
      </form>
    </div>
  );
}
