import React from "react";

const TermsConditions: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-start min-vh-80 py-5">
      <div className="text-center p-5 shadow-lg rounded bg-light w-75">
        <h2 className="mt-4">1. Bevezetés</h2>
        <p>
          Üdvözöljük weboldalunkon! Ezek a Felhasználási Feltételek szabályozzák
          weboldalunk használatát. Kérjük, figyelmesen olvassa el őket!
        </p>

        <h2 className="mt-4">2. A weboldal használata</h2>
        <p>
          A weboldalunkon való böngészés és szolgáltatásaink igénybevétele előtt
          hozzájárul ahhoz, hogy elfogadja ezeket a feltételeket.
        </p>

        <h2 className="mt-4">3. Felelősség kizárása</h2>
        <p>
          Weboldalunkat a legnagyobb gondossággal üzemeltetjük. Azonban nem
          vállalunk felelősséget a hibákért, elírásokért, vagy az esetleges
          elérhetőségi problémákért.
        </p>

        <h2 className="mt-4">4. Szellemi tulajdonjogok</h2>
        <p>
          Az oldalon található tartalom, beleértve a szöveget, képeket,
          grafikákat és szoftvereket, a mi szellemi tulajdonunkat képezi, és
          csak a weboldalunk használatára jogosít fel.
        </p>

        <h2 className="mt-4">5. Adatvédelem</h2>
        <p>
          Az Ön adatainak védelme kiemelt fontosságú számunkra. Az adatvédelmi
          irányelveinket a külön adatvédelmi oldalon találhatja meg.
        </p>

        <h2 className="mt-4">6. Változtatások</h2>
        <p>
          Fenntartjuk a jogot, hogy bármikor módosítsuk ezeket a feltételeket. A
          változtatásokat ezen az oldalon tesszük közzé, és az új verzió
          hatályba lépésekor érvényesek lesznek.
        </p>

        <h2 className="mt-4">7. Kapcsolat</h2>
        <p>
          Ha bármilyen kérdése van a felhasználási feltételeinkkel kapcsolatban,
          lépjen kapcsolatba velünk az alábbi e-mail címen:{" "}
          <strong>support@company.com</strong>
        </p>
        <p>
          <strong>Utolsó frissítés:</strong> 2025. március 28.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
