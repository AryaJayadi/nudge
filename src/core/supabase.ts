export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      data_mart_user_activity: {
        Row: {
          consent_agreement: boolean | null
          consent_date: string | null
          page_enter_time: string | null
          page_exit_time: string | null
          purchase_date: string | null
          purchase_percentage: number | null
          purchased_product: string | null
          question_id: string | null
          question_text: string | null
          question_type: string | null
          recommendation_date: string | null
          recommended_product: string | null
          record_category: string | null
          record_description: string | null
          record_id: string | null
          record_name: string | null
          record_title: string | null
          response_date: string | null
          simulation_id: string | null
          survey_completed: boolean | null
          survey_completion_date: string | null
          survey_id: number | null
          time_spent_on_page: unknown | null
          user_id: string | null
          user_response: Json | null
        }
        Insert: {
          consent_agreement?: boolean | null
          consent_date?: string | null
          page_enter_time?: string | null
          page_exit_time?: string | null
          purchase_date?: string | null
          purchase_percentage?: number | null
          purchased_product?: string | null
          question_id?: string | null
          question_text?: string | null
          question_type?: string | null
          recommendation_date?: string | null
          recommended_product?: string | null
          record_category?: string | null
          record_description?: string | null
          record_id?: string | null
          record_name?: string | null
          record_title?: string | null
          response_date?: string | null
          simulation_id?: string | null
          survey_completed?: boolean | null
          survey_completion_date?: string | null
          survey_id?: number | null
          time_spent_on_page?: unknown | null
          user_id?: string | null
          user_response?: Json | null
        }
        Update: {
          consent_agreement?: boolean | null
          consent_date?: string | null
          page_enter_time?: string | null
          page_exit_time?: string | null
          purchase_date?: string | null
          purchase_percentage?: number | null
          purchased_product?: string | null
          question_id?: string | null
          question_text?: string | null
          question_type?: string | null
          recommendation_date?: string | null
          recommended_product?: string | null
          record_category?: string | null
          record_description?: string | null
          record_id?: string | null
          record_name?: string | null
          record_title?: string | null
          response_date?: string | null
          simulation_id?: string | null
          survey_completed?: boolean | null
          survey_completion_date?: string | null
          survey_id?: number | null
          time_spent_on_page?: unknown | null
          user_id?: string | null
          user_response?: Json | null
        }
        Relationships: []
      }
      ik_temp_toweruserencoding: {
        Row: {
          alasan_menabung: number | null
          batas_waktu_keputusan: number | null
          faktor_memilih_produk: number | null
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_kemudahan_akses: number | null
          fitur_reward_cashback: number | null
          frekuensi_pembelian_besar: number | null
          frekuensi_pemeriksaan_saldo: number | null
          frekuensi_perjalanan: number | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          investasi_berisiko: number | null
          is_akhirpekan: number | null
          is_harikerja: number | null
          is_laki_laki: number | null
          is_perempuan: number | null
          is_purchased: number | null
          is_recommended: number | null
          is_tidakdividen: number | null
          is_tidakotomatis: number | null
          is_tidaksaraninvest: number | null
          is_tidaktujuan: number | null
          is_yadividen: number | null
          is_yaotomatis: number | null
          is_yasaraninvest: number | null
          is_yatujuan: number | null
          isclicked_asuransi_jiwa: number | null
          isclicked_asuransi_kendaraan: number | null
          isclicked_asuransi_kesehatan: number | null
          isclicked_asuransi_pendidikan: number | null
          isclicked_deposito: number | null
          isclicked_deposito_berjangka: number | null
          isclicked_kartu_kredit: number | null
          isclicked_kredit_kendaraan_bermotor_kkb: number | null
          isclicked_kredit_pemilikan_rumah_kpr: number | null
          isclicked_kredit_tanpa_agunan_kta: number | null
          isclicked_obligasi_bond: number | null
          isclicked_produk_emas_gold_investment: number | null
          isclicked_produk_saham_wealth_management: number | null
          isclicked_reksa_dana_campuran: number | null
          isclicked_reksa_dana_pasar_uang: number | null
          isclicked_reksa_dana_pendapatan_tetap: number | null
          isclicked_reksa_dana_saham: number | null
          isclicked_tabungan_berjangka: number | null
          isclicked_tabungan_haji: number | null
          isclicked_tabungan_reguler: number | null
          isclicked_unit_link: number | null
          jenis_investasi: number | null
          jenis_pekerjaan: number | null
          jenis_transaksi: number | null
          jumlah_tanggungan: number | null
          kenyamanan_informasi: number | null
          kenyamanan_telepon: number | null
          keputusan_dari_informasi: number | null
          ketertarikan_produk_baru: number | null
          memiliki_rumah: number | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          mengikuti_promo: number | null
          meningkatkan_tabungan: number | null
          motivasi_tujuan_finansial: number | null
          nasabah_bank: number | null
          pemeriksaan_pesan: number | null
          penawaran_khusus: number | null
          pendapatan_bulanan: number | null
          pengeluaran_bulanan: number | null
          penggunaan_aplikasi: number | null
          pentingnya_suku_bunga: number | null
          pesan_keuntungan_risiko: number | null
          preferensi_layanan: number | null
          preferensi_produk_detail: number | null
          preferensi_waktu_informasi: number | null
          prioritas_keuangan: number | null
          produk_asuransi: number | null
          produk_deposito: number | null
          produk_investasi: number | null
          produk_kartu_kredit: number | null
          produk_keuangan_digunakan: number | null
          produk_lainnya: number | null
          produk_pinjaman: number | null
          produk_tabungan: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sesuai_kebutuhan: number | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          purchased_asuransi_jiwa: number | null
          purchased_asuransi_kendaraan: number | null
          purchased_asuransi_kesehatan: number | null
          purchased_asuransi_pendidikan: number | null
          purchased_deposito: number | null
          purchased_deposito_berjangka: number | null
          purchased_kartu_kredit: number | null
          purchased_kredit_kendaraan_bermotor_kkb: number | null
          purchased_kredit_pemilikan_rumah_kpr: number | null
          purchased_kredit_tanpa_agunan_kta: number | null
          purchased_obligasi_bond: number | null
          purchased_produk_emas_gold_investment: number | null
          purchased_produk_saham_wealth_management: number | null
          purchased_reksa_dana_campuran: number | null
          purchased_reksa_dana_pasar_uang: number | null
          purchased_reksa_dana_pendapatan_tetap: number | null
          purchased_reksa_dana_saham: number | null
          purchased_tabungan_berjangka: number | null
          purchased_tabungan_haji: number | null
          purchased_tabungan_reguler: number | null
          purchased_unit_link: number | null
          rentang_usia: number | null
          rutinitas_menabung: number | null
          saluran_komunikasi: number | null
          status_pernikahan: number | null
          tingkat_pendidikan: number | null
          toleransi_risiko: number | null
          tujuan_keuangan: number | null
          user_id: string | null
          waktu_aktif_ponsel: number | null
          waktu_nyaman_penawaran: number | null
          year_month_isclicked: string | null
          year_month_ispurchased: string | null
          year_month_isrecommended: string | null
          year_month_purchaseproduct: string | null
          year_month_userresponse: string | null
        }
        Insert: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_purchased?: number | null
          is_recommended?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          pengeluaran_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month_isclicked?: string | null
          year_month_ispurchased?: string | null
          year_month_isrecommended?: string | null
          year_month_purchaseproduct?: string | null
          year_month_userresponse?: string | null
        }
        Update: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_purchased?: number | null
          is_recommended?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          pengeluaran_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month_isclicked?: string | null
          year_month_ispurchased?: string | null
          year_month_isrecommended?: string | null
          year_month_purchaseproduct?: string | null
          year_month_userresponse?: string | null
        }
        Relationships: []
      }
      pages: {
        Row: {
          created_at: string | null
          id: string
          page_name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          page_name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          page_name?: string
        }
        Relationships: []
      }
      questions: {
        Row: {
          created_at: string | null
          id: string
          options: Json
          question_text: string
          question_type: string
          survey_type_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          options: Json
          question_text: string
          question_type: string
          survey_type_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          options?: Json
          question_text?: string
          question_type?: string
          survey_type_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "questions_survey_type_id_fkey"
            columns: ["survey_type_id"]
            isOneToOne: false
            referencedRelation: "survey_types"
            referencedColumns: ["id"]
          },
        ]
      }
      record_categories: {
        Row: {
          category_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          category_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          category_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      records: {
        Row: {
          category_id: number | null
          created_at: string | null
          id: string
          page_id: string | null
          record_code: string | null
          record_description: string | null
          record_name: string
          record_title: string | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string | null
          id?: string
          page_id?: string | null
          record_code?: string | null
          record_description?: string | null
          record_name: string
          record_title?: string | null
        }
        Update: {
          category_id?: number | null
          created_at?: string | null
          id?: string
          page_id?: string | null
          record_code?: string | null
          record_description?: string | null
          record_name?: string
          record_title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "records_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "record_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      survey_types: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          type_name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          type_name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          type_name?: string
        }
        Relationships: []
      }
      temp_ik_data_mart_user_activity: {
        Row: {
          consent_agreement: boolean | null
          consent_date: string | null
          page_enter_time: string | null
          page_exit_time: string | null
          purchase_date: string | null
          purchase_percentage: number | null
          purchased_product: string | null
          question_id: string | null
          question_text: string | null
          question_type: string | null
          recommendation_date: string | null
          recommended_product: string | null
          record_category: string | null
          record_description: string | null
          record_id: string | null
          record_name: string | null
          record_title: string | null
          response_date: string | null
          simulation_id: string | null
          survey_completed: boolean | null
          survey_completion_date: string | null
          survey_id: number | null
          time_spent_on_page: unknown | null
          user_id: string | null
          user_response: Json | null
        }
        Insert: {
          consent_agreement?: boolean | null
          consent_date?: string | null
          page_enter_time?: string | null
          page_exit_time?: string | null
          purchase_date?: string | null
          purchase_percentage?: number | null
          purchased_product?: string | null
          question_id?: string | null
          question_text?: string | null
          question_type?: string | null
          recommendation_date?: string | null
          recommended_product?: string | null
          record_category?: string | null
          record_description?: string | null
          record_id?: string | null
          record_name?: string | null
          record_title?: string | null
          response_date?: string | null
          simulation_id?: string | null
          survey_completed?: boolean | null
          survey_completion_date?: string | null
          survey_id?: number | null
          time_spent_on_page?: unknown | null
          user_id?: string | null
          user_response?: Json | null
        }
        Update: {
          consent_agreement?: boolean | null
          consent_date?: string | null
          page_enter_time?: string | null
          page_exit_time?: string | null
          purchase_date?: string | null
          purchase_percentage?: number | null
          purchased_product?: string | null
          question_id?: string | null
          question_text?: string | null
          question_type?: string | null
          recommendation_date?: string | null
          recommended_product?: string | null
          record_category?: string | null
          record_description?: string | null
          record_id?: string | null
          record_name?: string | null
          record_title?: string | null
          response_date?: string | null
          simulation_id?: string | null
          survey_completed?: boolean | null
          survey_completion_date?: string | null
          survey_id?: number | null
          time_spent_on_page?: unknown | null
          user_id?: string | null
          user_response?: Json | null
        }
        Relationships: []
      }
      temp_ik_datamart_all_columns: {
        Row: {
          consent_agreement: boolean | null
          consent_date: string | null
          consent_form_id: number | null
          finish_survey_date: string | null
          finish_survey_id: number | null
          has_finished: boolean | null
          page_enter_times: string[] | null
          page_exit_times: string[] | null
          page_names: string[] | null
          phone_numbers: string[] | null
          purchase_percentages: number[] | null
          purchased_products: string[] | null
          question_ids: string[] | null
          question_texts: string[] | null
          question_types: string[] | null
          recommended_products: string[] | null
          record_categories: string[] | null
          record_titles: string[] | null
          simulations_finished: boolean[] | null
          survey_type_ids: string[] | null
          survey_type_names: string[] | null
          user_id: string | null
          user_responses: Json[] | null
        }
        Insert: {
          consent_agreement?: boolean | null
          consent_date?: string | null
          consent_form_id?: number | null
          finish_survey_date?: string | null
          finish_survey_id?: number | null
          has_finished?: boolean | null
          page_enter_times?: string[] | null
          page_exit_times?: string[] | null
          page_names?: string[] | null
          phone_numbers?: string[] | null
          purchase_percentages?: number[] | null
          purchased_products?: string[] | null
          question_ids?: string[] | null
          question_texts?: string[] | null
          question_types?: string[] | null
          recommended_products?: string[] | null
          record_categories?: string[] | null
          record_titles?: string[] | null
          simulations_finished?: boolean[] | null
          survey_type_ids?: string[] | null
          survey_type_names?: string[] | null
          user_id?: string | null
          user_responses?: Json[] | null
        }
        Update: {
          consent_agreement?: boolean | null
          consent_date?: string | null
          consent_form_id?: number | null
          finish_survey_date?: string | null
          finish_survey_id?: number | null
          has_finished?: boolean | null
          page_enter_times?: string[] | null
          page_exit_times?: string[] | null
          page_names?: string[] | null
          phone_numbers?: string[] | null
          purchase_percentages?: number[] | null
          purchased_products?: string[] | null
          question_ids?: string[] | null
          question_texts?: string[] | null
          question_types?: string[] | null
          recommended_products?: string[] | null
          record_categories?: string[] | null
          record_titles?: string[] | null
          simulations_finished?: boolean[] | null
          survey_type_ids?: string[] | null
          survey_type_names?: string[] | null
          user_id?: string | null
          user_responses?: Json[] | null
        }
        Relationships: []
      }
      temp_ik_datamart_two_tower: {
        Row: {
          interaction_durations: unknown[] | null
          interaction_end_times: string[] | null
          interaction_start_times: string[] | null
          item_category: string | null
          item_code: string | null
          item_description: string | null
          item_id: string | null
          item_name: string | null
          item_title: string | null
          phone_number: string | null
          preferred_categories: string[] | null
          purchase_percentages: number[] | null
          purchased_products: string[] | null
          question_texts: string[] | null
          question_types: string[] | null
          recommended_products: string[] | null
          simulation_ids: string[] | null
          survey_completed: boolean | null
          user_id: string | null
          user_responses: Json[] | null
          visited_pages: string[] | null
        }
        Insert: {
          interaction_durations?: unknown[] | null
          interaction_end_times?: string[] | null
          interaction_start_times?: string[] | null
          item_category?: string | null
          item_code?: string | null
          item_description?: string | null
          item_id?: string | null
          item_name?: string | null
          item_title?: string | null
          phone_number?: string | null
          preferred_categories?: string[] | null
          purchase_percentages?: number[] | null
          purchased_products?: string[] | null
          question_texts?: string[] | null
          question_types?: string[] | null
          recommended_products?: string[] | null
          simulation_ids?: string[] | null
          survey_completed?: boolean | null
          user_id?: string | null
          user_responses?: Json[] | null
          visited_pages?: string[] | null
        }
        Update: {
          interaction_durations?: unknown[] | null
          interaction_end_times?: string[] | null
          interaction_start_times?: string[] | null
          item_category?: string | null
          item_code?: string | null
          item_description?: string | null
          item_id?: string | null
          item_name?: string | null
          item_title?: string | null
          phone_number?: string | null
          preferred_categories?: string[] | null
          purchase_percentages?: number[] | null
          purchased_products?: string[] | null
          question_texts?: string[] | null
          question_types?: string[] | null
          recommended_products?: string[] | null
          simulation_ids?: string[] | null
          survey_completed?: boolean | null
          user_id?: string | null
          user_responses?: Json[] | null
          visited_pages?: string[] | null
        }
        Relationships: []
      }
      temp_ik_interactionclicked: {
        Row: {
          clicked: number | null
          product_title: string | null
          total_clicked: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          clicked?: number | null
          product_title?: string | null
          total_clicked?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          clicked?: number | null
          product_title?: string | null
          total_clicked?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      temp_ik_interactionpurchased: {
        Row: {
          product_title: string | null
          purchased: number | null
          total_purchased: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          product_title?: string | null
          purchased?: number | null
          total_purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          product_title?: string | null
          purchased?: number | null
          total_purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      temp_ik_interactionuserproduct: {
        Row: {
          clicked: number | null
          product_title: string | null
          purchased: number | null
          total_clicked: number | null
          total_purchased: number | null
          user_id: string | null
          year_month_clicked: string | null
          year_month_purchased: string | null
        }
        Insert: {
          clicked?: number | null
          product_title?: string | null
          purchased?: number | null
          total_clicked?: number | null
          total_purchased?: number | null
          user_id?: string | null
          year_month_clicked?: string | null
          year_month_purchased?: string | null
        }
        Update: {
          clicked?: number | null
          product_title?: string | null
          purchased?: number | null
          total_clicked?: number | null
          total_purchased?: number | null
          user_id?: string | null
          year_month_clicked?: string | null
          year_month_purchased?: string | null
        }
        Relationships: []
      }
      temp_ik_interactionuserproduct_f: {
        Row: {
          clicked: number | null
          product_title: string | null
          purchased: number | null
          record_code: string | null
          total_clicked: number | null
          total_purchased: number | null
          user_id: string | null
          year_month_clicked: string | null
          year_month_purchased: string | null
        }
        Insert: {
          clicked?: number | null
          product_title?: string | null
          purchased?: number | null
          record_code?: string | null
          total_clicked?: number | null
          total_purchased?: number | null
          user_id?: string | null
          year_month_clicked?: string | null
          year_month_purchased?: string | null
        }
        Update: {
          clicked?: number | null
          product_title?: string | null
          purchased?: number | null
          record_code?: string | null
          total_clicked?: number | null
          total_purchased?: number | null
          user_id?: string | null
          year_month_clicked?: string | null
          year_month_purchased?: string | null
        }
        Relationships: []
      }
      temp_ik_interactionuserproduct_final: {
        Row: {
          clicked: number | null
          product_title: string | null
          purchased: number | null
          record_code: string | null
          total_clicked: number | null
          total_purchased: number | null
          user_id: string | null
          year_month_clicked: string | null
          year_month_purchased: string | null
        }
        Insert: {
          clicked?: number | null
          product_title?: string | null
          purchased?: number | null
          record_code?: string | null
          total_clicked?: number | null
          total_purchased?: number | null
          user_id?: string | null
          year_month_clicked?: string | null
          year_month_purchased?: string | null
        }
        Update: {
          clicked?: number | null
          product_title?: string | null
          purchased?: number | null
          record_code?: string | null
          total_clicked?: number | null
          total_purchased?: number | null
          user_id?: string | null
          year_month_clicked?: string | null
          year_month_purchased?: string | null
        }
        Relationships: []
      }
      temp_ik_isclicked: {
        Row: {
          isclicked_asuransi_jiwa: number | null
          isclicked_asuransi_kendaraan: number | null
          isclicked_asuransi_kesehatan: number | null
          isclicked_asuransi_pendidikan: number | null
          isclicked_deposito: number | null
          isclicked_deposito_berjangka: number | null
          isclicked_kartu_kredit: number | null
          isclicked_kredit_kendaraan_bermotor_kkb: number | null
          isclicked_kredit_pemilikan_rumah_kpr: number | null
          isclicked_kredit_tanpa_agunan_kta: number | null
          isclicked_obligasi_bond: number | null
          isclicked_produk_emas_gold_investment: number | null
          isclicked_produk_saham_wealth_management: number | null
          isclicked_reksa_dana_campuran: number | null
          isclicked_reksa_dana_pasar_uang: number | null
          isclicked_reksa_dana_pendapatan_tetap: number | null
          isclicked_reksa_dana_saham: number | null
          isclicked_tabungan_berjangka: number | null
          isclicked_tabungan_haji: number | null
          isclicked_tabungan_reguler: number | null
          isclicked_unit_link: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      temp_ik_ispuchased: {
        Row: {
          is_purchased: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          is_purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          is_purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      temp_ik_isrecommeded: {
        Row: {
          is_recommended: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          is_recommended?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          is_recommended?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      temp_ik_listuser: {
        Row: {
          user_id: string | null
        }
        Insert: {
          user_id?: string | null
        }
        Update: {
          user_id?: string | null
        }
        Relationships: []
      }
      temp_ik_nudgemechanism: {
        Row: {
          category_id: number | null
          created_at: string | null
          id: string | null
          nudge_mechanism: string | null
          page_id: string | null
          record_code: string | null
          record_description: string | null
          record_name: string | null
          record_title: string | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string | null
          id?: string | null
          nudge_mechanism?: string | null
          page_id?: string | null
          record_code?: string | null
          record_description?: string | null
          record_name?: string | null
          record_title?: string | null
        }
        Update: {
          category_id?: number | null
          created_at?: string | null
          id?: string | null
          nudge_mechanism?: string | null
          page_id?: string | null
          record_code?: string | null
          record_description?: string | null
          record_name?: string | null
          record_title?: string | null
        }
        Relationships: []
      }
      temp_ik_purchaseproduct: {
        Row: {
          purchased_asuransi_jiwa: number | null
          purchased_asuransi_kendaraan: number | null
          purchased_asuransi_kesehatan: number | null
          purchased_asuransi_pendidikan: number | null
          purchased_deposito: number | null
          purchased_deposito_berjangka: number | null
          purchased_kartu_kredit: number | null
          purchased_kredit_kendaraan_bermotor_kkb: number | null
          purchased_kredit_pemilikan_rumah_kpr: number | null
          purchased_kredit_tanpa_agunan_kta: number | null
          purchased_obligasi_bond: number | null
          purchased_produk_emas_gold_investment: number | null
          purchased_produk_saham_wealth_management: number | null
          purchased_reksa_dana_campuran: number | null
          purchased_reksa_dana_pasar_uang: number | null
          purchased_reksa_dana_pendapatan_tetap: number | null
          purchased_reksa_dana_saham: number | null
          purchased_tabungan_berjangka: number | null
          purchased_tabungan_haji: number | null
          purchased_tabungan_reguler: number | null
          purchased_unit_link: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      temp_ik_towerproduct: {
        Row: {
          category_id: number | null
          product_decsription: string | null
          product_id: string | null
          product_name: string | null
          product_title: string | null
        }
        Insert: {
          category_id?: number | null
          product_decsription?: string | null
          product_id?: string | null
          product_name?: string | null
          product_title?: string | null
        }
        Update: {
          category_id?: number | null
          product_decsription?: string | null
          product_id?: string | null
          product_name?: string | null
          product_title?: string | null
        }
        Relationships: []
      }
      temp_ik_towerproductclean: {
        Row: {
          category_id: number | null
          frame_effect_variant: string | null
          nudge_content: string | null
          nudge_mechanism: string | null
          product_benefit_frame: string | null
          product_decsription: string | null
          product_id: string | null
          product_name: string | null
          product_title: string | null
          recommended_channel: string | null
          risk_profile: string | null
          target_segment: string | null
          urgency_trigger: string | null
        }
        Insert: {
          category_id?: number | null
          frame_effect_variant?: string | null
          nudge_content?: string | null
          nudge_mechanism?: string | null
          product_benefit_frame?: string | null
          product_decsription?: string | null
          product_id?: string | null
          product_name?: string | null
          product_title?: string | null
          recommended_channel?: string | null
          risk_profile?: string | null
          target_segment?: string | null
          urgency_trigger?: string | null
        }
        Update: {
          category_id?: number | null
          frame_effect_variant?: string | null
          nudge_content?: string | null
          nudge_mechanism?: string | null
          product_benefit_frame?: string | null
          product_decsription?: string | null
          product_id?: string | null
          product_name?: string | null
          product_title?: string | null
          recommended_channel?: string | null
          risk_profile?: string | null
          target_segment?: string | null
          urgency_trigger?: string | null
        }
        Relationships: []
      }
      temp_ik_toweruser: {
        Row: {
          alasan_menabung: string | null
          alat_pelacakan: string | null
          batas_waktu_keputusan: string | null
          faktor_memilih_produk: string | null
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_kemudahan_akses: number | null
          fitur_reward_cashback: number | null
          frekuensi_pembelian_besar: string | null
          frekuensi_pemeriksaan_saldo: string | null
          frekuensi_perjalanan: string | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          investasi_berisiko: string | null
          investasi_dividen: string | null
          is_purchased: number | null
          is_recommended: number | null
          isclicked_asuransi_jiwa: number | null
          isclicked_asuransi_kendaraan: number | null
          isclicked_asuransi_kesehatan: number | null
          isclicked_asuransi_pendidikan: number | null
          isclicked_deposito: number | null
          isclicked_deposito_berjangka: number | null
          isclicked_kartu_kredit: number | null
          isclicked_kredit_kendaraan_bermotor_kkb: number | null
          isclicked_kredit_pemilikan_rumah_kpr: number | null
          isclicked_kredit_tanpa_agunan_kta: number | null
          isclicked_obligasi_bond: number | null
          isclicked_produk_emas_gold_investment: number | null
          isclicked_produk_saham_wealth_management: number | null
          isclicked_reksa_dana_campuran: number | null
          isclicked_reksa_dana_pasar_uang: number | null
          isclicked_reksa_dana_pendapatan_tetap: number | null
          isclicked_reksa_dana_saham: number | null
          isclicked_tabungan_berjangka: number | null
          isclicked_tabungan_haji: number | null
          isclicked_tabungan_reguler: number | null
          isclicked_unit_link: number | null
          jenis_investasi: string | null
          jenis_kelamin: string | null
          jenis_pekerjaan: string | null
          jenis_transaksi: string | null
          jumlah_tanggungan: string | null
          kenyamanan_informasi: string | null
          kenyamanan_telepon: string | null
          keputusan_dari_informasi: string | null
          ketertarikan_produk_baru: string | null
          memiliki_rumah: string | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          mengikuti_promo: string | null
          meningkatkan_tabungan: number | null
          motivasi_tujuan_finansial: string | null
          nasabah_bank: number | null
          pemeriksaan_pesan: string | null
          penawaran_khusus: string | null
          pendapatan_bulanan: string | null
          pengeluaran_bulanan: string | null
          penggunaan_aplikasi: string | null
          pentingnya_suku_bunga: string | null
          pesan_keuntungan_risiko: string | null
          preferensi_layanan: string | null
          preferensi_produk: string | null
          preferensi_produk_detail: string | null
          preferensi_waktu_informasi: string | null
          prioritas_keuangan: string | null
          produk_asuransi: number | null
          produk_deposito: number | null
          produk_investasi: number | null
          produk_kartu_kredit: number | null
          produk_keuangan_digunakan: string | null
          produk_lainnya: number | null
          produk_pinjaman: number | null
          produk_tabungan: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sesuai_kebutuhan: string | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          purchased_asuransi_jiwa: number | null
          purchased_asuransi_kendaraan: number | null
          purchased_asuransi_kesehatan: number | null
          purchased_asuransi_pendidikan: number | null
          purchased_deposito: number | null
          purchased_deposito_berjangka: number | null
          purchased_kartu_kredit: number | null
          purchased_kredit_kendaraan_bermotor_kkb: number | null
          purchased_kredit_pemilikan_rumah_kpr: number | null
          purchased_kredit_tanpa_agunan_kta: number | null
          purchased_obligasi_bond: number | null
          purchased_produk_emas_gold_investment: number | null
          purchased_produk_saham_wealth_management: number | null
          purchased_reksa_dana_campuran: number | null
          purchased_reksa_dana_pasar_uang: number | null
          purchased_reksa_dana_pendapatan_tetap: number | null
          purchased_reksa_dana_saham: number | null
          purchased_tabungan_berjangka: number | null
          purchased_tabungan_haji: number | null
          purchased_tabungan_reguler: number | null
          purchased_unit_link: number | null
          rencana_tabungan_otomatis: string | null
          rentang_usia: string | null
          rutinitas_menabung: string | null
          saluran_komunikasi: string | null
          saran_investasi: string | null
          status_pernikahan: string | null
          tingkat_pendidikan: string | null
          toleransi_risiko: string | null
          tujuan_keuangan: string | null
          user_id: string | null
          waktu_aktif_ponsel: string | null
          waktu_nyaman_penawaran: string | null
          waktu_promosi: string | null
          year_month_isclicked: string | null
          year_month_ispurchased: string | null
          year_month_isrecommended: string | null
          year_month_purchaseproduct: string | null
          year_month_userresponse: string | null
        }
        Insert: {
          alasan_menabung?: string | null
          alat_pelacakan?: string | null
          batas_waktu_keputusan?: string | null
          faktor_memilih_produk?: string | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: string | null
          frekuensi_pemeriksaan_saldo?: string | null
          frekuensi_perjalanan?: string | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: string | null
          investasi_dividen?: string | null
          is_purchased?: number | null
          is_recommended?: number | null
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          jenis_investasi?: string | null
          jenis_kelamin?: string | null
          jenis_pekerjaan?: string | null
          jenis_transaksi?: string | null
          jumlah_tanggungan?: string | null
          kenyamanan_informasi?: string | null
          kenyamanan_telepon?: string | null
          keputusan_dari_informasi?: string | null
          ketertarikan_produk_baru?: string | null
          memiliki_rumah?: string | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: string | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: string | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: string | null
          penawaran_khusus?: string | null
          pendapatan_bulanan?: string | null
          pengeluaran_bulanan?: string | null
          penggunaan_aplikasi?: string | null
          pentingnya_suku_bunga?: string | null
          pesan_keuntungan_risiko?: string | null
          preferensi_layanan?: string | null
          preferensi_produk?: string | null
          preferensi_produk_detail?: string | null
          preferensi_waktu_informasi?: string | null
          prioritas_keuangan?: string | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: string | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: string | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          rencana_tabungan_otomatis?: string | null
          rentang_usia?: string | null
          rutinitas_menabung?: string | null
          saluran_komunikasi?: string | null
          saran_investasi?: string | null
          status_pernikahan?: string | null
          tingkat_pendidikan?: string | null
          toleransi_risiko?: string | null
          tujuan_keuangan?: string | null
          user_id?: string | null
          waktu_aktif_ponsel?: string | null
          waktu_nyaman_penawaran?: string | null
          waktu_promosi?: string | null
          year_month_isclicked?: string | null
          year_month_ispurchased?: string | null
          year_month_isrecommended?: string | null
          year_month_purchaseproduct?: string | null
          year_month_userresponse?: string | null
        }
        Update: {
          alasan_menabung?: string | null
          alat_pelacakan?: string | null
          batas_waktu_keputusan?: string | null
          faktor_memilih_produk?: string | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: string | null
          frekuensi_pemeriksaan_saldo?: string | null
          frekuensi_perjalanan?: string | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: string | null
          investasi_dividen?: string | null
          is_purchased?: number | null
          is_recommended?: number | null
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          jenis_investasi?: string | null
          jenis_kelamin?: string | null
          jenis_pekerjaan?: string | null
          jenis_transaksi?: string | null
          jumlah_tanggungan?: string | null
          kenyamanan_informasi?: string | null
          kenyamanan_telepon?: string | null
          keputusan_dari_informasi?: string | null
          ketertarikan_produk_baru?: string | null
          memiliki_rumah?: string | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: string | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: string | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: string | null
          penawaran_khusus?: string | null
          pendapatan_bulanan?: string | null
          pengeluaran_bulanan?: string | null
          penggunaan_aplikasi?: string | null
          pentingnya_suku_bunga?: string | null
          pesan_keuntungan_risiko?: string | null
          preferensi_layanan?: string | null
          preferensi_produk?: string | null
          preferensi_produk_detail?: string | null
          preferensi_waktu_informasi?: string | null
          prioritas_keuangan?: string | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: string | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: string | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          rencana_tabungan_otomatis?: string | null
          rentang_usia?: string | null
          rutinitas_menabung?: string | null
          saluran_komunikasi?: string | null
          saran_investasi?: string | null
          status_pernikahan?: string | null
          tingkat_pendidikan?: string | null
          toleransi_risiko?: string | null
          tujuan_keuangan?: string | null
          user_id?: string | null
          waktu_aktif_ponsel?: string | null
          waktu_nyaman_penawaran?: string | null
          waktu_promosi?: string | null
          year_month_isclicked?: string | null
          year_month_ispurchased?: string | null
          year_month_isrecommended?: string | null
          year_month_purchaseproduct?: string | null
          year_month_userresponse?: string | null
        }
        Relationships: []
      }
      temp_ik_toweruserclean: {
        Row: {
          alasan_menabung: string | null
          alat_pelacakan: string | null
          batas_waktu_keputusan: string | null
          faktor_memilih_produk: string | null
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_kemudahan_akses: number | null
          fitur_reward_cashback: number | null
          frekuensi_pembelian_besar: string | null
          frekuensi_pemeriksaan_saldo: string | null
          frekuensi_perjalanan: string | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          investasi_berisiko: string | null
          investasi_dividen: string | null
          is_purchased: number | null
          is_recommended: number | null
          isclicked_asuransi_jiwa: number | null
          isclicked_asuransi_kendaraan: number | null
          isclicked_asuransi_kesehatan: number | null
          isclicked_asuransi_pendidikan: number | null
          isclicked_deposito: number | null
          isclicked_deposito_berjangka: number | null
          isclicked_kartu_kredit: number | null
          isclicked_kredit_kendaraan_bermotor_kkb: number | null
          isclicked_kredit_pemilikan_rumah_kpr: number | null
          isclicked_kredit_tanpa_agunan_kta: number | null
          isclicked_obligasi_bond: number | null
          isclicked_produk_emas_gold_investment: number | null
          isclicked_produk_saham_wealth_management: number | null
          isclicked_reksa_dana_campuran: number | null
          isclicked_reksa_dana_pasar_uang: number | null
          isclicked_reksa_dana_pendapatan_tetap: number | null
          isclicked_reksa_dana_saham: number | null
          isclicked_tabungan_berjangka: number | null
          isclicked_tabungan_haji: number | null
          isclicked_tabungan_reguler: number | null
          isclicked_unit_link: number | null
          jenis_investasi: string | null
          jenis_kelamin: string | null
          jenis_pekerjaan: string | null
          jenis_transaksi: string | null
          jumlah_tanggungan: string | null
          kenyamanan_informasi: string | null
          kenyamanan_telepon: string | null
          keputusan_dari_informasi: string | null
          ketertarikan_produk_baru: string | null
          memiliki_rumah: string | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          mengikuti_promo: string | null
          meningkatkan_tabungan: number | null
          motivasi_tujuan_finansial: string | null
          nasabah_bank: number | null
          pemeriksaan_pesan: string | null
          penawaran_khusus: string | null
          pendapatan_bulanan: string | null
          pengeluaran_bulanan: string | null
          penggunaan_aplikasi: string | null
          pentingnya_suku_bunga: string | null
          pesan_keuntungan_risiko: string | null
          preferensi_layanan: string | null
          preferensi_produk: string | null
          preferensi_produk_detail: string | null
          preferensi_waktu_informasi: string | null
          prioritas_keuangan: string | null
          produk_asuransi: number | null
          produk_deposito: number | null
          produk_investasi: number | null
          produk_kartu_kredit: number | null
          produk_keuangan_digunakan: string | null
          produk_lainnya: number | null
          produk_pinjaman: number | null
          produk_tabungan: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sesuai_kebutuhan: string | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          purchased_asuransi_jiwa: number | null
          purchased_asuransi_kendaraan: number | null
          purchased_asuransi_kesehatan: number | null
          purchased_asuransi_pendidikan: number | null
          purchased_deposito: number | null
          purchased_deposito_berjangka: number | null
          purchased_kartu_kredit: number | null
          purchased_kredit_kendaraan_bermotor_kkb: number | null
          purchased_kredit_pemilikan_rumah_kpr: number | null
          purchased_kredit_tanpa_agunan_kta: number | null
          purchased_obligasi_bond: number | null
          purchased_produk_emas_gold_investment: number | null
          purchased_produk_saham_wealth_management: number | null
          purchased_reksa_dana_campuran: number | null
          purchased_reksa_dana_pasar_uang: number | null
          purchased_reksa_dana_pendapatan_tetap: number | null
          purchased_reksa_dana_saham: number | null
          purchased_tabungan_berjangka: number | null
          purchased_tabungan_haji: number | null
          purchased_tabungan_reguler: number | null
          purchased_unit_link: number | null
          rencana_tabungan_otomatis: string | null
          rutinitas_menabung: string | null
          saluran_komunikasi: string | null
          saran_investasi: string | null
          status_pernikahan: string | null
          tingkat_pendidikan: string | null
          toleransi_risiko: string | null
          tujuan_keuangan: string | null
          user_id: string | null
          waktu_aktif_ponsel: string | null
          waktu_nyaman_penawaran: string | null
          waktu_promosi: string | null
          year_month_isclicked: string | null
          year_month_ispurchased: string | null
          year_month_isrecommended: string | null
          year_month_purchaseproduct: string | null
          year_month_userresponse: string | null
        }
        Insert: {
          alasan_menabung?: string | null
          alat_pelacakan?: string | null
          batas_waktu_keputusan?: string | null
          faktor_memilih_produk?: string | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: string | null
          frekuensi_pemeriksaan_saldo?: string | null
          frekuensi_perjalanan?: string | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: string | null
          investasi_dividen?: string | null
          is_purchased?: number | null
          is_recommended?: number | null
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          jenis_investasi?: string | null
          jenis_kelamin?: string | null
          jenis_pekerjaan?: string | null
          jenis_transaksi?: string | null
          jumlah_tanggungan?: string | null
          kenyamanan_informasi?: string | null
          kenyamanan_telepon?: string | null
          keputusan_dari_informasi?: string | null
          ketertarikan_produk_baru?: string | null
          memiliki_rumah?: string | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: string | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: string | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: string | null
          penawaran_khusus?: string | null
          pendapatan_bulanan?: string | null
          pengeluaran_bulanan?: string | null
          penggunaan_aplikasi?: string | null
          pentingnya_suku_bunga?: string | null
          pesan_keuntungan_risiko?: string | null
          preferensi_layanan?: string | null
          preferensi_produk?: string | null
          preferensi_produk_detail?: string | null
          preferensi_waktu_informasi?: string | null
          prioritas_keuangan?: string | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: string | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: string | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          rencana_tabungan_otomatis?: string | null
          rutinitas_menabung?: string | null
          saluran_komunikasi?: string | null
          saran_investasi?: string | null
          status_pernikahan?: string | null
          tingkat_pendidikan?: string | null
          toleransi_risiko?: string | null
          tujuan_keuangan?: string | null
          user_id?: string | null
          waktu_aktif_ponsel?: string | null
          waktu_nyaman_penawaran?: string | null
          waktu_promosi?: string | null
          year_month_isclicked?: string | null
          year_month_ispurchased?: string | null
          year_month_isrecommended?: string | null
          year_month_purchaseproduct?: string | null
          year_month_userresponse?: string | null
        }
        Update: {
          alasan_menabung?: string | null
          alat_pelacakan?: string | null
          batas_waktu_keputusan?: string | null
          faktor_memilih_produk?: string | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: string | null
          frekuensi_pemeriksaan_saldo?: string | null
          frekuensi_perjalanan?: string | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: string | null
          investasi_dividen?: string | null
          is_purchased?: number | null
          is_recommended?: number | null
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          jenis_investasi?: string | null
          jenis_kelamin?: string | null
          jenis_pekerjaan?: string | null
          jenis_transaksi?: string | null
          jumlah_tanggungan?: string | null
          kenyamanan_informasi?: string | null
          kenyamanan_telepon?: string | null
          keputusan_dari_informasi?: string | null
          ketertarikan_produk_baru?: string | null
          memiliki_rumah?: string | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: string | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: string | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: string | null
          penawaran_khusus?: string | null
          pendapatan_bulanan?: string | null
          pengeluaran_bulanan?: string | null
          penggunaan_aplikasi?: string | null
          pentingnya_suku_bunga?: string | null
          pesan_keuntungan_risiko?: string | null
          preferensi_layanan?: string | null
          preferensi_produk?: string | null
          preferensi_produk_detail?: string | null
          preferensi_waktu_informasi?: string | null
          prioritas_keuangan?: string | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: string | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: string | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          rencana_tabungan_otomatis?: string | null
          rutinitas_menabung?: string | null
          saluran_komunikasi?: string | null
          saran_investasi?: string | null
          status_pernikahan?: string | null
          tingkat_pendidikan?: string | null
          toleransi_risiko?: string | null
          tujuan_keuangan?: string | null
          user_id?: string | null
          waktu_aktif_ponsel?: string | null
          waktu_nyaman_penawaran?: string | null
          waktu_promosi?: string | null
          year_month_isclicked?: string | null
          year_month_ispurchased?: string | null
          year_month_isrecommended?: string | null
          year_month_purchaseproduct?: string | null
          year_month_userresponse?: string | null
        }
        Relationships: []
      }
      temp_ik_toweruserencoding: {
        Row: {
          alasan_menabung: number | null
          batas_waktu_keputusan: number | null
          faktor_memilih_produk: number | null
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_kemudahan_akses: number | null
          fitur_reward_cashback: number | null
          frekuensi_pembelian_besar: number | null
          frekuensi_pemeriksaan_saldo: number | null
          frekuensi_perjalanan: number | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          investasi_berisiko: number | null
          is_akhirpekan: number | null
          is_harikerja: number | null
          is_laki_laki: number | null
          is_perempuan: number | null
          is_purchased: number | null
          is_recommended: number | null
          is_tidakdividen: number | null
          is_tidakotomatis: number | null
          is_tidaksaraninvest: number | null
          is_tidaktujuan: number | null
          is_yadividen: number | null
          is_yaotomatis: number | null
          is_yasaraninvest: number | null
          is_yatujuan: number | null
          isclicked_asuransi_jiwa: number | null
          isclicked_asuransi_kendaraan: number | null
          isclicked_asuransi_kesehatan: number | null
          isclicked_asuransi_pendidikan: number | null
          isclicked_deposito: number | null
          isclicked_deposito_berjangka: number | null
          isclicked_kartu_kredit: number | null
          isclicked_kredit_kendaraan_bermotor_kkb: number | null
          isclicked_kredit_pemilikan_rumah_kpr: number | null
          isclicked_kredit_tanpa_agunan_kta: number | null
          isclicked_obligasi_bond: number | null
          isclicked_produk_emas_gold_investment: number | null
          isclicked_produk_saham_wealth_management: number | null
          isclicked_reksa_dana_campuran: number | null
          isclicked_reksa_dana_pasar_uang: number | null
          isclicked_reksa_dana_pendapatan_tetap: number | null
          isclicked_reksa_dana_saham: number | null
          isclicked_tabungan_berjangka: number | null
          isclicked_tabungan_haji: number | null
          isclicked_tabungan_reguler: number | null
          isclicked_unit_link: number | null
          jenis_investasi: number | null
          jenis_pekerjaan: number | null
          jenis_transaksi: number | null
          jumlah_tanggungan: number | null
          kenyamanan_informasi: number | null
          kenyamanan_telepon: number | null
          keputusan_dari_informasi: number | null
          ketertarikan_produk_baru: number | null
          memiliki_rumah: number | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          mengikuti_promo: number | null
          meningkatkan_tabungan: number | null
          motivasi_tujuan_finansial: number | null
          nasabah_bank: number | null
          pemeriksaan_pesan: number | null
          penawaran_khusus: number | null
          pendapatan_bulanan: number | null
          pengeluaran_bulanan: number | null
          penggunaan_aplikasi: number | null
          pentingnya_suku_bunga: number | null
          pesan_keuntungan_risiko: number | null
          preferensi_layanan: number | null
          preferensi_produk_detail: number | null
          preferensi_waktu_informasi: number | null
          prioritas_keuangan: number | null
          produk_asuransi: number | null
          produk_deposito: number | null
          produk_investasi: number | null
          produk_kartu_kredit: number | null
          produk_keuangan_digunakan: number | null
          produk_lainnya: number | null
          produk_pinjaman: number | null
          produk_tabungan: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sesuai_kebutuhan: number | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          purchased_asuransi_jiwa: number | null
          purchased_asuransi_kendaraan: number | null
          purchased_asuransi_kesehatan: number | null
          purchased_asuransi_pendidikan: number | null
          purchased_deposito: number | null
          purchased_deposito_berjangka: number | null
          purchased_kartu_kredit: number | null
          purchased_kredit_kendaraan_bermotor_kkb: number | null
          purchased_kredit_pemilikan_rumah_kpr: number | null
          purchased_kredit_tanpa_agunan_kta: number | null
          purchased_obligasi_bond: number | null
          purchased_produk_emas_gold_investment: number | null
          purchased_produk_saham_wealth_management: number | null
          purchased_reksa_dana_campuran: number | null
          purchased_reksa_dana_pasar_uang: number | null
          purchased_reksa_dana_pendapatan_tetap: number | null
          purchased_reksa_dana_saham: number | null
          purchased_tabungan_berjangka: number | null
          purchased_tabungan_haji: number | null
          purchased_tabungan_reguler: number | null
          purchased_unit_link: number | null
          rentang_usia: number | null
          rutinitas_menabung: number | null
          saluran_komunikasi: number | null
          status_pernikahan: number | null
          tingkat_pendidikan: number | null
          toleransi_risiko: number | null
          tujuan_keuangan: number | null
          user_id: string | null
          waktu_aktif_ponsel: number | null
          waktu_nyaman_penawaran: number | null
          year_month_isclicked: string | null
          year_month_ispurchased: string | null
          year_month_isrecommended: string | null
          year_month_purchaseproduct: string | null
          year_month_userresponse: string | null
        }
        Insert: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_purchased?: number | null
          is_recommended?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          pengeluaran_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month_isclicked?: string | null
          year_month_ispurchased?: string | null
          year_month_isrecommended?: string | null
          year_month_purchaseproduct?: string | null
          year_month_userresponse?: string | null
        }
        Update: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_purchased?: number | null
          is_recommended?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          pengeluaran_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month_isclicked?: string | null
          year_month_ispurchased?: string | null
          year_month_isrecommended?: string | null
          year_month_purchaseproduct?: string | null
          year_month_userresponse?: string | null
        }
        Relationships: []
      }
      temp_ik_trainingselection: {
        Row: {
          created_at: string | null
          has_finished: boolean | null
          id: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          created_at?: string | null
          has_finished?: boolean | null
          id?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          created_at?: string | null
          has_finished?: boolean | null
          id?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      temp_ik_uploadproductdetail: {
        Row: {
          category_id: number | null
          frame_effect_variant: string | null
          product_benefit_frame: string | null
          recommended_channel: string | null
          record_code: string | null
          record_description: string | null
          record_name: string | null
          record_title: string | null
          risk_profile: string | null
          target_segment: string | null
          urgency_trigger: string | null
        }
        Insert: {
          category_id?: number | null
          frame_effect_variant?: string | null
          product_benefit_frame?: string | null
          recommended_channel?: string | null
          record_code?: string | null
          record_description?: string | null
          record_name?: string | null
          record_title?: string | null
          risk_profile?: string | null
          target_segment?: string | null
          urgency_trigger?: string | null
        }
        Update: {
          category_id?: number | null
          frame_effect_variant?: string | null
          product_benefit_frame?: string | null
          recommended_channel?: string | null
          record_code?: string | null
          record_description?: string | null
          record_name?: string | null
          record_title?: string | null
          risk_profile?: string | null
          target_segment?: string | null
          urgency_trigger?: string | null
        }
        Relationships: []
      }
      temp_ik_user_responses_questions: {
        Row: {
          alasan_menabung: string | null
          alat_pelacakan: string | null
          batas_waktu_keputusan: string | null
          cara_menerima_informasi: string | null
          faktor_memilih_produk: string | null
          frekuensi_pembelian_besar: string | null
          frekuensi_pemeriksaan_saldo: string | null
          frekuensi_perjalanan: string | null
          investasi_berisiko: string | null
          investasi_dividen: string | null
          jenis_informasi: string | null
          jenis_investasi: string | null
          jenis_kelamin: string | null
          jenis_pekerjaan: string | null
          jenis_transaksi: string | null
          jumlah_tanggungan: string | null
          kenyamanan_informasi: string | null
          kenyamanan_telepon: string | null
          keputusan_dari_informasi: string | null
          ketertarikan_produk_baru: string | null
          memiliki_rumah: string | null
          mengikuti_promo: string | null
          meningkatkan_tabungan: string | null
          motivasi_tujuan_finansial: string | null
          nasabah_bank: string | null
          pemeriksaan_pesan: string | null
          penawaran_khusus: string | null
          pendapatan_bulanan: string | null
          pengeluaran_bulanan: string | null
          penggunaan_aplikasi: string | null
          pentingnya_fitur: string | null
          pentingnya_suku_bunga: string | null
          pesan_keuntungan_risiko: string | null
          preferensi_layanan: string | null
          preferensi_produk: string | null
          preferensi_produk_detail: string | null
          preferensi_promosi: string | null
          preferensi_waktu_informasi: string | null
          prioritas_keuangan: string | null
          produk_keuangan_digunakan: string | null
          produk_keuangan_dimiliki: string | null
          promosi_sesuai_kebutuhan: string | null
          rencana_tabungan_otomatis: string | null
          rentang_usia: string | null
          rutinitas_menabung: string | null
          saluran_komunikasi: string | null
          saran_investasi: string | null
          status_pernikahan: string | null
          tingkat_pendidikan: string | null
          toleransi_risiko: string | null
          tujuan_keuangan: string | null
          user_id: string | null
          waktu_aktif_ponsel: string | null
          waktu_nyaman_penawaran: string | null
          waktu_promosi: string | null
          year_month: string | null
        }
        Insert: {
          alasan_menabung?: string | null
          alat_pelacakan?: string | null
          batas_waktu_keputusan?: string | null
          cara_menerima_informasi?: string | null
          faktor_memilih_produk?: string | null
          frekuensi_pembelian_besar?: string | null
          frekuensi_pemeriksaan_saldo?: string | null
          frekuensi_perjalanan?: string | null
          investasi_berisiko?: string | null
          investasi_dividen?: string | null
          jenis_informasi?: string | null
          jenis_investasi?: string | null
          jenis_kelamin?: string | null
          jenis_pekerjaan?: string | null
          jenis_transaksi?: string | null
          jumlah_tanggungan?: string | null
          kenyamanan_informasi?: string | null
          kenyamanan_telepon?: string | null
          keputusan_dari_informasi?: string | null
          ketertarikan_produk_baru?: string | null
          memiliki_rumah?: string | null
          mengikuti_promo?: string | null
          meningkatkan_tabungan?: string | null
          motivasi_tujuan_finansial?: string | null
          nasabah_bank?: string | null
          pemeriksaan_pesan?: string | null
          penawaran_khusus?: string | null
          pendapatan_bulanan?: string | null
          pengeluaran_bulanan?: string | null
          penggunaan_aplikasi?: string | null
          pentingnya_fitur?: string | null
          pentingnya_suku_bunga?: string | null
          pesan_keuntungan_risiko?: string | null
          preferensi_layanan?: string | null
          preferensi_produk?: string | null
          preferensi_produk_detail?: string | null
          preferensi_promosi?: string | null
          preferensi_waktu_informasi?: string | null
          prioritas_keuangan?: string | null
          produk_keuangan_digunakan?: string | null
          produk_keuangan_dimiliki?: string | null
          promosi_sesuai_kebutuhan?: string | null
          rencana_tabungan_otomatis?: string | null
          rentang_usia?: string | null
          rutinitas_menabung?: string | null
          saluran_komunikasi?: string | null
          saran_investasi?: string | null
          status_pernikahan?: string | null
          tingkat_pendidikan?: string | null
          toleransi_risiko?: string | null
          tujuan_keuangan?: string | null
          user_id?: string | null
          waktu_aktif_ponsel?: string | null
          waktu_nyaman_penawaran?: string | null
          waktu_promosi?: string | null
          year_month?: string | null
        }
        Update: {
          alasan_menabung?: string | null
          alat_pelacakan?: string | null
          batas_waktu_keputusan?: string | null
          cara_menerima_informasi?: string | null
          faktor_memilih_produk?: string | null
          frekuensi_pembelian_besar?: string | null
          frekuensi_pemeriksaan_saldo?: string | null
          frekuensi_perjalanan?: string | null
          investasi_berisiko?: string | null
          investasi_dividen?: string | null
          jenis_informasi?: string | null
          jenis_investasi?: string | null
          jenis_kelamin?: string | null
          jenis_pekerjaan?: string | null
          jenis_transaksi?: string | null
          jumlah_tanggungan?: string | null
          kenyamanan_informasi?: string | null
          kenyamanan_telepon?: string | null
          keputusan_dari_informasi?: string | null
          ketertarikan_produk_baru?: string | null
          memiliki_rumah?: string | null
          mengikuti_promo?: string | null
          meningkatkan_tabungan?: string | null
          motivasi_tujuan_finansial?: string | null
          nasabah_bank?: string | null
          pemeriksaan_pesan?: string | null
          penawaran_khusus?: string | null
          pendapatan_bulanan?: string | null
          pengeluaran_bulanan?: string | null
          penggunaan_aplikasi?: string | null
          pentingnya_fitur?: string | null
          pentingnya_suku_bunga?: string | null
          pesan_keuntungan_risiko?: string | null
          preferensi_layanan?: string | null
          preferensi_produk?: string | null
          preferensi_produk_detail?: string | null
          preferensi_promosi?: string | null
          preferensi_waktu_informasi?: string | null
          prioritas_keuangan?: string | null
          produk_keuangan_digunakan?: string | null
          produk_keuangan_dimiliki?: string | null
          promosi_sesuai_kebutuhan?: string | null
          rencana_tabungan_otomatis?: string | null
          rentang_usia?: string | null
          rutinitas_menabung?: string | null
          saluran_komunikasi?: string | null
          saran_investasi?: string | null
          status_pernikahan?: string | null
          tingkat_pendidikan?: string | null
          toleransi_risiko?: string | null
          tujuan_keuangan?: string | null
          user_id?: string | null
          waktu_aktif_ponsel?: string | null
          waktu_nyaman_penawaran?: string | null
          waktu_promosi?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      temp_ik_user_responses_questionsdetail: {
        Row: {
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_kemudahan_akses: number | null
          fitur_reward_cashback: number | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          ishave_asuransi: number | null
          ishave_deposito: number | null
          ishave_investasi: number | null
          ishave_kartu_kredit: number | null
          ishave_lainnya: number | null
          ishave_pinjaman: number | null
          ishave_tabungan: number | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          ishave_asuransi?: number | null
          ishave_deposito?: number | null
          ishave_investasi?: number | null
          ishave_kartu_kredit?: number | null
          ishave_lainnya?: number | null
          ishave_pinjaman?: number | null
          ishave_tabungan?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          ishave_asuransi?: number | null
          ishave_deposito?: number | null
          ishave_investasi?: number | null
          ishave_kartu_kredit?: number | null
          ishave_lainnya?: number | null
          ishave_pinjaman?: number | null
          ishave_tabungan?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      temp_ik_userproduct: {
        Row: {
          product_title: string | null
          user_id: string | null
        }
        Insert: {
          product_title?: string | null
          user_id?: string | null
        }
        Update: {
          product_title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      temp_ik_usersresponse: {
        Row: {
          alasan_menabung: string | null
          alat_pelacakan: string | null
          batas_waktu_keputusan: string | null
          faktor_memilih_produk: string | null
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_kemudahan_akses: number | null
          fitur_reward_cashback: number | null
          frekuensi_pembelian_besar: string | null
          frekuensi_pemeriksaan_saldo: string | null
          frekuensi_perjalanan: string | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          investasi_berisiko: string | null
          investasi_dividen: string | null
          jenis_investasi: string | null
          jenis_kelamin: string | null
          jenis_pekerjaan: string | null
          jenis_transaksi: string | null
          jumlah_tanggungan: string | null
          kenyamanan_informasi: string | null
          kenyamanan_telepon: string | null
          keputusan_dari_informasi: string | null
          ketertarikan_produk_baru: string | null
          memiliki_rumah: string | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          mengikuti_promo: string | null
          meningkatkan_tabungan: number | null
          motivasi_tujuan_finansial: string | null
          nasabah_bank: number | null
          pemeriksaan_pesan: string | null
          penawaran_khusus: string | null
          pendapatan_bulanan: string | null
          pengeluaran_bulanan: string | null
          penggunaan_aplikasi: string | null
          pentingnya_suku_bunga: string | null
          pesan_keuntungan_risiko: string | null
          preferensi_layanan: string | null
          preferensi_produk: string | null
          preferensi_produk_detail: string | null
          preferensi_waktu_informasi: string | null
          prioritas_keuangan: string | null
          produk_asuransi: number | null
          produk_deposito: number | null
          produk_investasi: number | null
          produk_kartu_kredit: number | null
          produk_keuangan_digunakan: string | null
          produk_lainnya: number | null
          produk_pinjaman: number | null
          produk_tabungan: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sesuai_kebutuhan: string | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          rencana_tabungan_otomatis: string | null
          rentang_usia: string | null
          rutinitas_menabung: string | null
          saluran_komunikasi: string | null
          saran_investasi: string | null
          status_pernikahan: string | null
          tingkat_pendidikan: string | null
          toleransi_risiko: string | null
          tujuan_keuangan: string | null
          user_id: string | null
          waktu_aktif_ponsel: string | null
          waktu_nyaman_penawaran: string | null
          waktu_promosi: string | null
          year_month: string | null
        }
        Insert: {
          alasan_menabung?: string | null
          alat_pelacakan?: string | null
          batas_waktu_keputusan?: string | null
          faktor_memilih_produk?: string | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: string | null
          frekuensi_pemeriksaan_saldo?: string | null
          frekuensi_perjalanan?: string | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: string | null
          investasi_dividen?: string | null
          jenis_investasi?: string | null
          jenis_kelamin?: string | null
          jenis_pekerjaan?: string | null
          jenis_transaksi?: string | null
          jumlah_tanggungan?: string | null
          kenyamanan_informasi?: string | null
          kenyamanan_telepon?: string | null
          keputusan_dari_informasi?: string | null
          ketertarikan_produk_baru?: string | null
          memiliki_rumah?: string | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: string | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: string | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: string | null
          penawaran_khusus?: string | null
          pendapatan_bulanan?: string | null
          pengeluaran_bulanan?: string | null
          penggunaan_aplikasi?: string | null
          pentingnya_suku_bunga?: string | null
          pesan_keuntungan_risiko?: string | null
          preferensi_layanan?: string | null
          preferensi_produk?: string | null
          preferensi_produk_detail?: string | null
          preferensi_waktu_informasi?: string | null
          prioritas_keuangan?: string | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: string | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: string | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          rencana_tabungan_otomatis?: string | null
          rentang_usia?: string | null
          rutinitas_menabung?: string | null
          saluran_komunikasi?: string | null
          saran_investasi?: string | null
          status_pernikahan?: string | null
          tingkat_pendidikan?: string | null
          toleransi_risiko?: string | null
          tujuan_keuangan?: string | null
          user_id?: string | null
          waktu_aktif_ponsel?: string | null
          waktu_nyaman_penawaran?: string | null
          waktu_promosi?: string | null
          year_month?: string | null
        }
        Update: {
          alasan_menabung?: string | null
          alat_pelacakan?: string | null
          batas_waktu_keputusan?: string | null
          faktor_memilih_produk?: string | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_kemudahan_akses?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: string | null
          frekuensi_pemeriksaan_saldo?: string | null
          frekuensi_perjalanan?: string | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: string | null
          investasi_dividen?: string | null
          jenis_investasi?: string | null
          jenis_kelamin?: string | null
          jenis_pekerjaan?: string | null
          jenis_transaksi?: string | null
          jumlah_tanggungan?: string | null
          kenyamanan_informasi?: string | null
          kenyamanan_telepon?: string | null
          keputusan_dari_informasi?: string | null
          ketertarikan_produk_baru?: string | null
          memiliki_rumah?: string | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: string | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: string | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: string | null
          penawaran_khusus?: string | null
          pendapatan_bulanan?: string | null
          pengeluaran_bulanan?: string | null
          penggunaan_aplikasi?: string | null
          pentingnya_suku_bunga?: string | null
          pesan_keuntungan_risiko?: string | null
          preferensi_layanan?: string | null
          preferensi_produk?: string | null
          preferensi_produk_detail?: string | null
          preferensi_waktu_informasi?: string | null
          prioritas_keuangan?: string | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: string | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: string | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          rencana_tabungan_otomatis?: string | null
          rentang_usia?: string | null
          rutinitas_menabung?: string | null
          saluran_komunikasi?: string | null
          saran_investasi?: string | null
          status_pernikahan?: string | null
          tingkat_pendidikan?: string | null
          toleransi_risiko?: string | null
          tujuan_keuangan?: string | null
          user_id?: string | null
          waktu_aktif_ponsel?: string | null
          waktu_nyaman_penawaran?: string | null
          waktu_promosi?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      temp_takers: {
        Row: {
          created_at: string | null
          id: number | null
          name_purchased: string | null
          percentage_purchased: number | null
          recommended_product: string | null
          simulation_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          name_purchased?: string | null
          percentage_purchased?: number | null
          recommended_product?: string | null
          simulation_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          name_purchased?: string | null
          percentage_purchased?: number | null
          recommended_product?: string | null
          simulation_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      tw_interaction: {
        Row: {
          product_id: string | null
          product_title: string | null
          purchased: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          product_id?: string | null
          product_title?: string | null
          purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          product_id?: string | null
          product_title?: string | null
          purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      tw_interaction_d: {
        Row: {
          product_id: string | null
          product_title: string | null
          purchased: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          product_id?: string | null
          product_title?: string | null
          purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          product_id?: string | null
          product_title?: string | null
          purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      tw_interaction_val: {
        Row: {
          product_id: string | null
          product_title: string | null
          purchased: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          product_id?: string | null
          product_title?: string | null
          purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          product_id?: string | null
          product_title?: string | null
          purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      tw_interaction_valtwo: {
        Row: {
          product_id: string | null
          product_title: string | null
          purchased: number | null
          user_id: string | null
          year_month: string | null
        }
        Insert: {
          product_id?: string | null
          product_title?: string | null
          purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Update: {
          product_id?: string | null
          product_title?: string | null
          purchased?: number | null
          user_id?: string | null
          year_month?: string | null
        }
        Relationships: []
      }
      tw_user: {
        Row: {
          alasan_menabung: number | null
          batas_waktu_keputusan: number | null
          faktor_memilih_produk: number | null
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_reward_cashback: number | null
          frekuensi_pembelian_besar: number | null
          frekuensi_pemeriksaan_saldo: number | null
          frekuensi_perjalanan: number | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          investasi_berisiko: number | null
          is_akhirpekan: number | null
          is_harikerja: number | null
          is_laki_laki: number | null
          is_perempuan: number | null
          is_tidakdividen: number | null
          is_tidakotomatis: number | null
          is_tidaksaraninvest: number | null
          is_tidaktujuan: number | null
          is_yadividen: number | null
          is_yaotomatis: number | null
          is_yasaraninvest: number | null
          is_yatujuan: number | null
          jenis_investasi: number | null
          jenis_pekerjaan: number | null
          jenis_transaksi: number | null
          jumlah_tanggungan: number | null
          kenyamanan_informasi: number | null
          kenyamanan_telepon: number | null
          keputusan_dari_informasi: number | null
          ketertarikan_produk_baru: number | null
          memiliki_rumah: number | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          mengikuti_promo: number | null
          meningkatkan_tabungan: number | null
          motivasi_tujuan_finansial: number | null
          nasabah_bank: number | null
          pemeriksaan_pesan: number | null
          penawaran_khusus: number | null
          pendapatan_bulanan: number | null
          penggunaan_aplikasi: number | null
          pentingnya_suku_bunga: number | null
          pesan_keuntungan_risiko: number | null
          preferensi_layanan: number | null
          preferensi_produk_detail: number | null
          preferensi_waktu_informasi: number | null
          prioritas_keuangan: number | null
          produk_asuransi: number | null
          produk_deposito: number | null
          produk_investasi: number | null
          produk_kartu_kredit: number | null
          produk_keuangan_digunakan: number | null
          produk_lainnya: number | null
          produk_pinjaman: number | null
          produk_tabungan: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sesuai_kebutuhan: number | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          rentang_usia: number | null
          rutinitas_menabung: number | null
          saluran_komunikasi: number | null
          status_pernikahan: number | null
          tingkat_pendidikan: number | null
          toleransi_risiko: number | null
          tujuan_keuangan: number | null
          user_id: string | null
          waktu_aktif_ponsel: number | null
          waktu_nyaman_penawaran: number | null
          year_month: string | null
        }
        Insert: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month?: string | null
        }
        Update: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month?: string | null
        }
        Relationships: []
      }
      tw_user_d: {
        Row: {
          alasan_menabung: number | null
          batas_waktu_keputusan: number | null
          faktor_memilih_produk: number | null
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_reward_cashback: number | null
          frekuensi_pembelian_besar: number | null
          frekuensi_pemeriksaan_saldo: number | null
          frekuensi_perjalanan: number | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          investasi_berisiko: number | null
          is_akhirpekan: number | null
          is_harikerja: number | null
          is_laki_laki: number | null
          is_perempuan: number | null
          is_tidakdividen: number | null
          is_tidakotomatis: number | null
          is_tidaksaraninvest: number | null
          is_tidaktujuan: number | null
          is_yadividen: number | null
          is_yaotomatis: number | null
          is_yasaraninvest: number | null
          is_yatujuan: number | null
          jenis_investasi: number | null
          jenis_pekerjaan: number | null
          jenis_transaksi: number | null
          jumlah_tanggungan: number | null
          kenyamanan_informasi: number | null
          kenyamanan_telepon: number | null
          keputusan_dari_informasi: number | null
          ketertarikan_produk_baru: number | null
          memiliki_rumah: number | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          mengikuti_promo: number | null
          meningkatkan_tabungan: number | null
          motivasi_tujuan_finansial: number | null
          nasabah_bank: number | null
          pemeriksaan_pesan: number | null
          penawaran_khusus: number | null
          pendapatan_bulanan: number | null
          penggunaan_aplikasi: number | null
          pentingnya_suku_bunga: number | null
          pesan_keuntungan_risiko: number | null
          preferensi_layanan: number | null
          preferensi_produk_detail: number | null
          preferensi_waktu_informasi: number | null
          prioritas_keuangan: number | null
          produk_asuransi: number | null
          produk_deposito: number | null
          produk_investasi: number | null
          produk_kartu_kredit: number | null
          produk_keuangan_digunakan: number | null
          produk_lainnya: number | null
          produk_pinjaman: number | null
          produk_tabungan: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sesuai_kebutuhan: number | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          rentang_usia: number | null
          rutinitas_menabung: number | null
          saluran_komunikasi: number | null
          status_pernikahan: number | null
          tingkat_pendidikan: number | null
          toleransi_risiko: number | null
          tujuan_keuangan: number | null
          user_id: string | null
          waktu_aktif_ponsel: number | null
          waktu_nyaman_penawaran: number | null
          year_month: string | null
        }
        Insert: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month?: string | null
        }
        Update: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month?: string | null
        }
        Relationships: []
      }
      tw_user_val: {
        Row: {
          alasan_menabung: number | null
          batas_waktu_keputusan: number | null
          faktor_memilih_produk: number | null
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_reward_cashback: number | null
          frekuensi_pembelian_besar: number | null
          frekuensi_pemeriksaan_saldo: number | null
          frekuensi_perjalanan: number | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          investasi_berisiko: number | null
          is_akhirpekan: number | null
          is_harikerja: number | null
          is_laki_laki: number | null
          is_perempuan: number | null
          is_tidakdividen: number | null
          is_tidakotomatis: number | null
          is_tidaksaraninvest: number | null
          is_tidaktujuan: number | null
          is_yadividen: number | null
          is_yaotomatis: number | null
          is_yasaraninvest: number | null
          is_yatujuan: number | null
          jenis_investasi: number | null
          jenis_pekerjaan: number | null
          jenis_transaksi: number | null
          jumlah_tanggungan: number | null
          kenyamanan_informasi: number | null
          kenyamanan_telepon: number | null
          keputusan_dari_informasi: number | null
          ketertarikan_produk_baru: number | null
          memiliki_rumah: number | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          mengikuti_promo: number | null
          meningkatkan_tabungan: number | null
          motivasi_tujuan_finansial: number | null
          nasabah_bank: number | null
          pemeriksaan_pesan: number | null
          penawaran_khusus: number | null
          pendapatan_bulanan: number | null
          penggunaan_aplikasi: number | null
          pentingnya_suku_bunga: number | null
          pesan_keuntungan_risiko: number | null
          preferensi_layanan: number | null
          preferensi_produk_detail: number | null
          preferensi_waktu_informasi: number | null
          prioritas_keuangan: number | null
          produk_asuransi: number | null
          produk_deposito: number | null
          produk_investasi: number | null
          produk_kartu_kredit: number | null
          produk_keuangan_digunakan: number | null
          produk_lainnya: number | null
          produk_pinjaman: number | null
          produk_tabungan: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sesuai_kebutuhan: number | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          rentang_usia: number | null
          rutinitas_menabung: number | null
          saluran_komunikasi: number | null
          status_pernikahan: number | null
          tingkat_pendidikan: number | null
          toleransi_risiko: number | null
          tujuan_keuangan: number | null
          user_id: string | null
          waktu_aktif_ponsel: number | null
          waktu_nyaman_penawaran: number | null
          year_month: string | null
        }
        Insert: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month?: string | null
        }
        Update: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month?: string | null
        }
        Relationships: []
      }
      tw_user_valtwo: {
        Row: {
          alasan_menabung: number | null
          batas_waktu_keputusan: number | null
          faktor_memilih_produk: number | null
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_reward_cashback: number | null
          frekuensi_pembelian_besar: number | null
          frekuensi_pemeriksaan_saldo: number | null
          frekuensi_perjalanan: number | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          investasi_berisiko: number | null
          is_akhirpekan: number | null
          is_harikerja: number | null
          is_laki_laki: number | null
          is_perempuan: number | null
          is_tidakdividen: number | null
          is_tidakotomatis: number | null
          is_tidaksaraninvest: number | null
          is_tidaktujuan: number | null
          is_yadividen: number | null
          is_yaotomatis: number | null
          is_yasaraninvest: number | null
          is_yatujuan: number | null
          jenis_investasi: number | null
          jenis_pekerjaan: number | null
          jenis_transaksi: number | null
          jumlah_tanggungan: number | null
          kenyamanan_informasi: number | null
          kenyamanan_telepon: number | null
          keputusan_dari_informasi: number | null
          ketertarikan_produk_baru: number | null
          memiliki_rumah: number | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          mengikuti_promo: number | null
          meningkatkan_tabungan: number | null
          motivasi_tujuan_finansial: number | null
          nasabah_bank: number | null
          pemeriksaan_pesan: number | null
          penawaran_khusus: number | null
          pendapatan_bulanan: number | null
          penggunaan_aplikasi: number | null
          pentingnya_suku_bunga: number | null
          pesan_keuntungan_risiko: number | null
          preferensi_layanan: number | null
          preferensi_produk_detail: number | null
          preferensi_waktu_informasi: number | null
          prioritas_keuangan: number | null
          produk_asuransi: number | null
          produk_deposito: number | null
          produk_investasi: number | null
          produk_kartu_kredit: number | null
          produk_keuangan_digunakan: number | null
          produk_lainnya: number | null
          produk_pinjaman: number | null
          produk_tabungan: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sesuai_kebutuhan: number | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          rentang_usia: number | null
          rutinitas_menabung: number | null
          saluran_komunikasi: number | null
          status_pernikahan: number | null
          tingkat_pendidikan: number | null
          toleransi_risiko: number | null
          tujuan_keuangan: number | null
          user_id: string | null
          waktu_aktif_ponsel: number | null
          waktu_nyaman_penawaran: number | null
          year_month: string | null
        }
        Insert: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month?: string | null
        }
        Update: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month?: string | null
        }
        Relationships: []
      }
      tw_userall: {
        Row: {
          alasan_menabung: number | null
          batas_waktu_keputusan: number | null
          faktor_memilih_produk: number | null
          fitur_bunga_imbal_hasil: number | null
          fitur_dukungan_pelanggan: number | null
          fitur_keamanan_transaksi: number | null
          fitur_reward_cashback: number | null
          frekuensi_pembelian_besar: number | null
          frekuensi_pemeriksaan_saldo: number | null
          frekuensi_perjalanan: number | null
          informasi_kemudahan_akses: number | null
          informasi_potensi_keuangan: number | null
          informasi_risiko_rendah: number | null
          informasi_testimoni: number | null
          investasi_berisiko: number | null
          is_akhirpekan: number | null
          is_harikerja: number | null
          is_laki_laki: number | null
          is_perempuan: number | null
          is_purchased: number | null
          is_tidakdividen: number | null
          is_tidakotomatis: number | null
          is_tidaksaraninvest: number | null
          is_tidaktujuan: number | null
          is_yadividen: number | null
          is_yaotomatis: number | null
          is_yasaraninvest: number | null
          is_yatujuan: number | null
          isclicked_asuransi_jiwa: number | null
          isclicked_asuransi_kendaraan: number | null
          isclicked_asuransi_kesehatan: number | null
          isclicked_asuransi_pendidikan: number | null
          isclicked_deposito: number | null
          isclicked_deposito_berjangka: number | null
          isclicked_kartu_kredit: number | null
          isclicked_kredit_kendaraan_bermotor_kkb: number | null
          isclicked_kredit_pemilikan_rumah_kpr: number | null
          isclicked_kredit_tanpa_agunan_kta: number | null
          isclicked_obligasi_bond: number | null
          isclicked_produk_emas_gold_investment: number | null
          isclicked_produk_saham_wealth_management: number | null
          isclicked_reksa_dana_campuran: number | null
          isclicked_reksa_dana_pasar_uang: number | null
          isclicked_reksa_dana_pendapatan_tetap: number | null
          isclicked_reksa_dana_saham: number | null
          isclicked_tabungan_berjangka: number | null
          isclicked_tabungan_haji: number | null
          isclicked_tabungan_reguler: number | null
          isclicked_unit_link: number | null
          jenis_investasi: number | null
          jenis_pekerjaan: number | null
          jenis_transaksi: number | null
          jumlah_tanggungan: number | null
          kenyamanan_informasi: number | null
          kenyamanan_telepon: number | null
          keputusan_dari_informasi: number | null
          ketertarikan_produk_baru: number | null
          memiliki_rumah: number | null
          menerima_aplikasi_bank: number | null
          menerima_email: number | null
          menerima_media_sosial: number | null
          menerima_sms: number | null
          menerima_telepon: number | null
          mengikuti_promo: number | null
          meningkatkan_tabungan: number | null
          motivasi_tujuan_finansial: number | null
          nasabah_bank: number | null
          pemeriksaan_pesan: number | null
          penawaran_khusus: number | null
          pendapatan_bulanan: number | null
          penggunaan_aplikasi: number | null
          pentingnya_suku_bunga: number | null
          pesan_keuntungan_risiko: number | null
          preferensi_layanan: number | null
          preferensi_produk_detail: number | null
          preferensi_waktu_informasi: number | null
          prioritas_keuangan: number | null
          produk_asuransi: number | null
          produk_deposito: number | null
          produk_investasi: number | null
          produk_kartu_kredit: number | null
          produk_keuangan_digunakan: number | null
          produk_lainnya: number | null
          produk_pinjaman: number | null
          produk_tabungan: number | null
          promosi_aplikasi_bank: number | null
          promosi_email: number | null
          promosi_media_sosial: number | null
          promosi_sesuai_kebutuhan: number | null
          promosi_sms: number | null
          promosi_website_bank: number | null
          purchased_asuransi_jiwa: number | null
          purchased_asuransi_kendaraan: number | null
          purchased_asuransi_kesehatan: number | null
          purchased_asuransi_pendidikan: number | null
          purchased_deposito: number | null
          purchased_deposito_berjangka: number | null
          purchased_kartu_kredit: number | null
          purchased_kredit_kendaraan_bermotor_kkb: number | null
          purchased_kredit_pemilikan_rumah_kpr: number | null
          purchased_kredit_tanpa_agunan_kta: number | null
          purchased_obligasi_bond: number | null
          purchased_produk_emas_gold_investment: number | null
          purchased_produk_saham_wealth_management: number | null
          purchased_reksa_dana_campuran: number | null
          purchased_reksa_dana_pasar_uang: number | null
          purchased_reksa_dana_pendapatan_tetap: number | null
          purchased_reksa_dana_saham: number | null
          purchased_tabungan_berjangka: number | null
          purchased_tabungan_haji: number | null
          purchased_tabungan_reguler: number | null
          purchased_unit_link: number | null
          rentang_usia: number | null
          rutinitas_menabung: number | null
          saluran_komunikasi: number | null
          status_pernikahan: number | null
          tingkat_pendidikan: number | null
          toleransi_risiko: number | null
          tujuan_keuangan: number | null
          user_id: string | null
          waktu_aktif_ponsel: number | null
          waktu_nyaman_penawaran: number | null
          year_month: string | null
        }
        Insert: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_purchased?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month?: string | null
        }
        Update: {
          alasan_menabung?: number | null
          batas_waktu_keputusan?: number | null
          faktor_memilih_produk?: number | null
          fitur_bunga_imbal_hasil?: number | null
          fitur_dukungan_pelanggan?: number | null
          fitur_keamanan_transaksi?: number | null
          fitur_reward_cashback?: number | null
          frekuensi_pembelian_besar?: number | null
          frekuensi_pemeriksaan_saldo?: number | null
          frekuensi_perjalanan?: number | null
          informasi_kemudahan_akses?: number | null
          informasi_potensi_keuangan?: number | null
          informasi_risiko_rendah?: number | null
          informasi_testimoni?: number | null
          investasi_berisiko?: number | null
          is_akhirpekan?: number | null
          is_harikerja?: number | null
          is_laki_laki?: number | null
          is_perempuan?: number | null
          is_purchased?: number | null
          is_tidakdividen?: number | null
          is_tidakotomatis?: number | null
          is_tidaksaraninvest?: number | null
          is_tidaktujuan?: number | null
          is_yadividen?: number | null
          is_yaotomatis?: number | null
          is_yasaraninvest?: number | null
          is_yatujuan?: number | null
          isclicked_asuransi_jiwa?: number | null
          isclicked_asuransi_kendaraan?: number | null
          isclicked_asuransi_kesehatan?: number | null
          isclicked_asuransi_pendidikan?: number | null
          isclicked_deposito?: number | null
          isclicked_deposito_berjangka?: number | null
          isclicked_kartu_kredit?: number | null
          isclicked_kredit_kendaraan_bermotor_kkb?: number | null
          isclicked_kredit_pemilikan_rumah_kpr?: number | null
          isclicked_kredit_tanpa_agunan_kta?: number | null
          isclicked_obligasi_bond?: number | null
          isclicked_produk_emas_gold_investment?: number | null
          isclicked_produk_saham_wealth_management?: number | null
          isclicked_reksa_dana_campuran?: number | null
          isclicked_reksa_dana_pasar_uang?: number | null
          isclicked_reksa_dana_pendapatan_tetap?: number | null
          isclicked_reksa_dana_saham?: number | null
          isclicked_tabungan_berjangka?: number | null
          isclicked_tabungan_haji?: number | null
          isclicked_tabungan_reguler?: number | null
          isclicked_unit_link?: number | null
          jenis_investasi?: number | null
          jenis_pekerjaan?: number | null
          jenis_transaksi?: number | null
          jumlah_tanggungan?: number | null
          kenyamanan_informasi?: number | null
          kenyamanan_telepon?: number | null
          keputusan_dari_informasi?: number | null
          ketertarikan_produk_baru?: number | null
          memiliki_rumah?: number | null
          menerima_aplikasi_bank?: number | null
          menerima_email?: number | null
          menerima_media_sosial?: number | null
          menerima_sms?: number | null
          menerima_telepon?: number | null
          mengikuti_promo?: number | null
          meningkatkan_tabungan?: number | null
          motivasi_tujuan_finansial?: number | null
          nasabah_bank?: number | null
          pemeriksaan_pesan?: number | null
          penawaran_khusus?: number | null
          pendapatan_bulanan?: number | null
          penggunaan_aplikasi?: number | null
          pentingnya_suku_bunga?: number | null
          pesan_keuntungan_risiko?: number | null
          preferensi_layanan?: number | null
          preferensi_produk_detail?: number | null
          preferensi_waktu_informasi?: number | null
          prioritas_keuangan?: number | null
          produk_asuransi?: number | null
          produk_deposito?: number | null
          produk_investasi?: number | null
          produk_kartu_kredit?: number | null
          produk_keuangan_digunakan?: number | null
          produk_lainnya?: number | null
          produk_pinjaman?: number | null
          produk_tabungan?: number | null
          promosi_aplikasi_bank?: number | null
          promosi_email?: number | null
          promosi_media_sosial?: number | null
          promosi_sesuai_kebutuhan?: number | null
          promosi_sms?: number | null
          promosi_website_bank?: number | null
          purchased_asuransi_jiwa?: number | null
          purchased_asuransi_kendaraan?: number | null
          purchased_asuransi_kesehatan?: number | null
          purchased_asuransi_pendidikan?: number | null
          purchased_deposito?: number | null
          purchased_deposito_berjangka?: number | null
          purchased_kartu_kredit?: number | null
          purchased_kredit_kendaraan_bermotor_kkb?: number | null
          purchased_kredit_pemilikan_rumah_kpr?: number | null
          purchased_kredit_tanpa_agunan_kta?: number | null
          purchased_obligasi_bond?: number | null
          purchased_produk_emas_gold_investment?: number | null
          purchased_produk_saham_wealth_management?: number | null
          purchased_reksa_dana_campuran?: number | null
          purchased_reksa_dana_pasar_uang?: number | null
          purchased_reksa_dana_pendapatan_tetap?: number | null
          purchased_reksa_dana_saham?: number | null
          purchased_tabungan_berjangka?: number | null
          purchased_tabungan_haji?: number | null
          purchased_tabungan_reguler?: number | null
          purchased_unit_link?: number | null
          rentang_usia?: number | null
          rutinitas_menabung?: number | null
          saluran_komunikasi?: number | null
          status_pernikahan?: number | null
          tingkat_pendidikan?: number | null
          toleransi_risiko?: number | null
          tujuan_keuangan?: number | null
          user_id?: string | null
          waktu_aktif_ponsel?: number | null
          waktu_nyaman_penawaran?: number | null
          year_month?: string | null
        }
        Relationships: []
      }
      two_tower_training_result: {
        Row: {
          created_at: string | null
          product_id: string | null
          rank: number | null
          score: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          product_id?: string | null
          rank?: number | null
          score?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          product_id?: string | null
          rank?: number | null
          score?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_consent_form: {
        Row: {
          consent_agreement: boolean | null
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          consent_agreement?: boolean | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          consent_agreement?: boolean | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_consent"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_finish_simulations: {
        Row: {
          created_at: string
          finished_simulation: boolean | null
          id: string
          phone_number: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          finished_simulation?: boolean | null
          id?: string
          phone_number?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          finished_simulation?: boolean | null
          id?: string
          phone_number?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_simulations"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_finish_surveys: {
        Row: {
          created_at: string
          has_finished: boolean | null
          id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          has_finished?: boolean | null
          id?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          has_finished?: boolean | null
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_surveys"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_page_visits: {
        Row: {
          created_at: string | null
          enter_time: string
          exit_time: string
          id: string
          page_id: string | null
          page_name: string | null
          record_id: string | null
          record_title: string | null
          simulation_id: string | null
          time_spent: unknown | null
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          enter_time: string
          exit_time: string
          id?: string
          page_id?: string | null
          page_name?: string | null
          record_id?: string | null
          record_title?: string | null
          simulation_id?: string | null
          time_spent?: unknown | null
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          enter_time?: string
          exit_time?: string
          id?: string
          page_id?: string | null
          page_name?: string | null
          record_id?: string | null
          record_title?: string | null
          simulation_id?: string | null
          time_spent?: unknown | null
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_page_visits"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_page_visits_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_page_visits_record_id_fkey"
            columns: ["record_id"]
            isOneToOne: false
            referencedRelation: "records"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_page_visits_simulation_id_fkey"
            columns: ["simulation_id"]
            isOneToOne: false
            referencedRelation: "user_finish_simulations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_purchases: {
        Row: {
          created_at: string
          id: number
          name_purchased: string | null
          percentage_purchased: number | null
          simulation_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name_purchased?: string | null
          percentage_purchased?: number | null
          simulation_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name_purchased?: string | null
          percentage_purchased?: number | null
          simulation_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_purchases"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_purchases_simulation_id_fkey"
            columns: ["simulation_id"]
            isOneToOne: false
            referencedRelation: "user_finish_simulations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_recommendations: {
        Row: {
          created_at: string
          id: number
          recommended_product: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          recommended_product?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          recommended_product?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_recommendations"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_responses: {
        Row: {
          created_at: string | null
          id: string
          question_id: string | null
          response: Json
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          question_id?: string | null
          response: Json
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          question_id?: string | null
          response?: Json
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_responses"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_responses_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          email: string | null
          id: string
        }
        Insert: {
          email?: string | null
          id: string
        }
        Update: {
          email?: string | null
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
