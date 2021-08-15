
//
// Copyright (c) 2021 - present by Pouya Kary <pouya@kary.us>
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//


//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    import { parseIDF }
        from "./parser"
    import { serializeIDF }
        from "./serializer"

//
// ─── API ────────────────────────────────────────────────────────────────────────
//

    export function formatIDF ( idf: string ): string {
        const parseTree =
            parseIDF( idf )
        const serializedIDF =
            serializeIDF( parseTree )
        return serializedIDF
    }

// ────────────────────────────────────────────────────────────────────────────────
